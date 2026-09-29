import { experiences, education } from '../lib/data'

const Experience = () => {
  return (
    <section id="experience" className="section bg-white text-gray-900">
      <div className="container-max-width section-padding">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 sm:whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-black px-3.5 py-1 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {education.degree}
                </h3>
                <p className="text-gray-600 font-medium">{education.school}</p>
              </div>
              <span className="text-sm text-gray-500 sm:whitespace-nowrap">
                {education.duration}
              </span>
            </div>
            <ul className="space-y-2">
              {education.details.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
