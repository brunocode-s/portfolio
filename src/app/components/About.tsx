const stats = [
  { value: "5+", label: "Years experience" },
  // { value: "3.79", label: "CGPA, BSc Computer Science" },
  { value: "2", label: "Current roles" },
];

const About = () => {
  return (
    <section id="about" className="section bg-white text-gray-900">
      <div className="container-max-width section-padding">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I&apos;m a passionate developer with expertise in modern web
            technologies
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 text-center text-gray-600 leading-relaxed text-base sm:text-lg">
          <p>
            I&apos;m a front-end developer with 5+ years of hands-on experience
            building responsive web applications with React and JavaScript. I
            currently work at Tripplex Technologies on Loftspace and continue at
            DigitalFigures on an education product.
          </p>
          <p>
            I graduated with a BSc in Computer Science from the Federal
            University of Oye-Ekiti in July 2026, and I&apos;ve delivered
            freelance projects for international clients. I care about clean,
            performant code and seamless user experiences.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-black p-6 sm:p-8 text-center text-white"
            >
              <p className="text-4xl sm:text-5xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
