'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white animated-gradient">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-white mb-8">
                Feel free to reach out if you&apos;re looking for a developer, have a question, 
                or just want to connect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:john@example.com" className="text-white hover:text-primary-600">
                    alainbrunoofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+234 (816) 440-7328" className="text-white hover:text-primary-600">
                    +234 (816) 440-7328
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-white">Oyo, NG</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 text-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400
                  focus:border-transparent text-white"
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
                className="w-full px-4 py-3 text-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400
                 focus:border-transparent"
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
                className="w-full px-4 py-3 border text-white border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400
                   focus:border-transparent resize-none"
              />
            </div>
            <div className="flex justify-end adaptive-text">
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 hover:bg-white hover:text-gray-900 adaptive-text"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
