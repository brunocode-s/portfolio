'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6">
      <div
        className={`mx-auto max-w-5xl bg-black/90 backdrop-blur-md text-white border border-white/10 shadow-lg shadow-black/20 ${
          isMenuOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between h-14 pl-5 pr-3 sm:pl-6 sm:pr-4">
          <a href="#" className="text-base sm:text-lg font-bold">
            Alain Bruno
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-full p-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden px-3 pb-3 border-t border-white/10 pt-2" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
