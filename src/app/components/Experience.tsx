import { experiences } from '../lib/data'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-base">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-lg text-sm"
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

export default Experience