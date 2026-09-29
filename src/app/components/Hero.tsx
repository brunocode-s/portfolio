import { Github, Linkedin, Mail, Download } from 'lucide-react'

const socialClass =
  'flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-gray-300 hover:bg-white hover:text-black transition-colors'

const Hero = () => {
  return (
    <section className="min-h-svh flex items-center justify-center bg-black text-white bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%)]">
      <div className="container-max-width section-padding pt-28 pb-16 text-center">
        <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs sm:text-sm text-gray-300 mb-6">
          Front-end Developer · Ibadan, Nigeria
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m Alain Bruno
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
          A front-end developer creating amazing web experiences with modern
          technologies and clean code.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto mb-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-black hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="/assets/ALAINresume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-3">
          <a href="https://github.com/brunocode-s" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialClass}>
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/bruno-alain-269143266" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialClass}>
            <Linkedin size={22} />
          </a>
          <a href="mailto:alainbrunoofficial@gmail.com" aria-label="Email" className={socialClass}>
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
