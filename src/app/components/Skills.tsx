import { skills } from '../lib/data'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium"
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