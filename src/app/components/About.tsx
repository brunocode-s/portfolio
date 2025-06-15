import Image from 'next/image';

const About = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container-max-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I&apos;m a passionate developer with expertise in modern web technologies
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                With over 3 years of experience in web development, I specialize in creating 
                scalable, user-friendly applications using cutting-edge technologies. My journey 
                began with getting a Computer Science degree and has evolved through hands-on experience 
                with various frameworks and tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m passionate about clean code, performance optimization, and creating 
                seamless user experiences. When I&apos;m not coding, you&apos;ll find me exploring 
                new technologies, contributing to open-source projects, or sharing knowledge 
                with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary-50 px-4 py-2 rounded-lg">
                  <span className="text-primary-700 font-medium">3+ Years Experience</span>
                </div>
                <div className="bg-primary-50 px-4 py-2 rounded-lg">
                  <span className="text-primary-700 font-medium">20+ Projects Completed</span>
                </div>
                {/* <div className="bg-primary-50 px-4 py-2 rounded-lg">
                  <span className="text-primary-700 font-medium">Open Source Contributor</span>
                </div> */}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src="/images/my_profile.jpeg"
                      alt="Profile Picture"
                      width={280}
                      height={150}
                      className="rounded-2xl object-cover shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About