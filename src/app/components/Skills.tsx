import { skills } from '../lib/data'

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-100 text-gray-900">
      <div className="container-max-width section-padding">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5 text-center">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-gray-100 px-3.5 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
