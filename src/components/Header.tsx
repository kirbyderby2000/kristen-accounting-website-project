import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/ayala-accounting-assets/images/ayala-logo-reference.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Ayala Bookkeeping Co." className="h-9 md:h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium text-ink hover:text-accent transition-colors ${
                pathname === link.path ? 'border-b-2 border-accent pb-1' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5"
          >
            Get in Touch <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-menu" className="lg:hidden border-t border-hairline bg-cream">
          <div className="px-6 md:px-10 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium text-ink hover:text-accent transition-colors ${
                  pathname === link.path ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5 mt-2"
            >
              Get in Touch <span aria-hidden>→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
