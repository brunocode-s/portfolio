'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const inputClass =
  'w-full rounded-2xl border border-white/15 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section bg-black text-white">
      <div className="container-max-width section-padding">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400">
                Feel free to reach out if you&apos;re looking for a developer, have a
                question, or just want to connect.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-2xl bg-white p-3">
                  <Mail className="text-black" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:alainbrunoofficial@gmail.com"
                    className="block break-all text-gray-400 hover:text-white"
                  >
                    alainbrunoofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-2xl bg-white p-3">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+2348164407328" className="block text-gray-400 hover:text-white">
                    +234 816 440 7328
                  </a>
                  <a href="tel:+2349132172426" className="block text-gray-400 hover:text-white">
                    +234 913 217 2426
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-2xl bg-white p-3">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-400">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-black hover:bg-gray-200 transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
