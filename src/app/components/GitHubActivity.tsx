import { Github, Star, GitFork } from "lucide-react";

const USERNAME = "brunocode-s";
const REVALIDATE = 60 * 60; // refresh once an hour

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};
type Profile = { public_repos: number; followers: number };

const LEVELS = {
  NONE: 0,
  FIRST_QUARTER: 1,
  SECOND_QUARTER: 2,
  THIRD_QUARTER: 3,
  FOURTH_QUARTER: 4,
} as const;

const levelClass = [
  "bg-gray-200",
  "bg-gray-400",
  "bg-gray-500",
  "bg-gray-700",
  "bg-gray-900",
];

async function getContributions(): Promise<{
  days: Day[];
  total: number;
} | null> {
  try {
    const token = process.env.GITHUB_TOKEN;

    // With a token: official GraphQL API (includes private contributions if enabled on your profile)
    if (token) {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query($login:String!){
            user(login:$login){
              contributionsCollection{
                contributionCalendar{
                  totalContributions
                  weeks{ contributionDays{ date contributionCount contributionLevel } }
                }
              }
            }
          }`,
          variables: { login: USERNAME },
        }),
        next: { revalidate: REVALIDATE },
      });
      if (!res.ok) throw new Error("graphql failed");
      const json = await res.json();
      const cal = json.data.user.contributionsCollection.contributionCalendar;
      const days: Day[] = cal.weeks.flatMap((w: any) =>
        w.contributionDays.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel as keyof typeof LEVELS],
        })),
      );
      return { days, total: cal.totalContributions };
    }

    // Without a token: public contributions proxy (no setup needed)
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) throw new Error("proxy failed");
    const json = await res.json();
    return {
      days: json.contributions as Day[],
      total: json.total.lastYear as number,
    };
  } catch {
    return null;
  }
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=12`,
      {
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : undefined,
        next: { revalidate: REVALIDATE },
      },
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork).slice(0, 3);
  } catch {
    return [];
  }
}

async function getProfile(): Promise<Profile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : undefined,
      next: { revalidate: REVALIDATE },
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

function currentStreak(days: Day[]) {
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) streak++;
    else if (i === days.length - 1)
      continue; // today may not have commits yet
    else break;
  }
  return streak;
}

// Group days into Sunday-first weeks, padding the first week
function toWeeks(days: Day[]) {
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = [];
  const firstDow = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  for (let i = 0; i < firstDow; i++) week.push(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);
  return weeks;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GitHubActivity = async () => {
  const [data, repos, profile] = await Promise.all([
    getContributions(),
    getRepos(),
    getProfile(),
  ]);

  const stats = data
    ? [
        {
          value: data.total.toLocaleString(),
          label: "Contributions, last year",
        },
        { value: `${currentStreak(data.days)}d`, label: "Current streak" },
        ...(profile
          ? [
              { value: String(profile.public_repos), label: "Public repos" },
              { value: String(profile.followers), label: "Followers" },
            ]
          : []),
      ]
    : [];

  const weeks = data ? toWeeks(data.days) : [];

  return (
    <section id="github" className="section bg-gray-100 text-gray-900">
      <div className="container-max-width section-padding">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            What I&apos;ve been building lately
          </p>
        </div>

        {data && (
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Heatmap */}
            <div className="overflow-x-auto pb-2">
              <div className="mx-auto w-max">
                {/* Month labels */}
                <div className="grid grid-flow-col auto-cols-[12px] gap-[3px] mb-1 h-4 text-[10px] text-gray-500">
                  {weeks.map((w, i) => {
                    const first = w.find(Boolean);
                    const m = first
                      ? new Date(first.date + "T00:00:00Z").getUTCMonth()
                      : -1;
                    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
                    const pm = prev
                      ? new Date(prev.date + "T00:00:00Z").getUTCMonth()
                      : -1;
                    return (
                      <div key={i} className="relative">
                        {m !== pm && (
                          <span className="absolute left-0">{MONTHS[m]}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-flow-col auto-cols-[12px] gap-[3px]">
                  {weeks.map((w, wi) => (
                    <div key={wi} className="grid grid-rows-7 gap-[3px]">
                      {Array.from({ length: 7 }).map((_, di) => {
                        const d = w[di];
                        return d ? (
                          <div
                            key={di}
                            title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                            className={`h-3 w-3 rounded-[3px] ${levelClass[d.level]}`}
                          />
                        ) : (
                          <div key={di} className="h-3 w-3" />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-gray-500">
                  <span className="mr-1">Less</span>
                  {levelClass.map((c) => (
                    <div key={c} className={`h-3 w-3 rounded-[3px] ${c}`} />
                  ))}
                  <span className="ml-1">More</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent repos */}
        {repos.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Github size={16} />
                  <span className="truncate">{repo.name}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {repo.description ?? "No description yet"}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-700">
                      {repo.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            <Github size={16} />
            View full profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
