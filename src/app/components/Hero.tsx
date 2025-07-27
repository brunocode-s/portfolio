'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white animated-gradient">
      <div className="container-max-width section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-primary-600">Alain Bruno</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate FRONT-END Developer creating amazing web experiences
            with modern technologies and clean code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="bg-primary-600 text-gray-600 px-8 py-3 rounded-lg hover:border-2 hover:bg-primary-700 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 transform-gpu"
            >
              <Mail size={20} />
              Get In Touch
            </a>

            <a
              href="/assets/ALAINresume.pdf"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 transform-gpu"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/brunocode-s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alainbrunoofficial@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
