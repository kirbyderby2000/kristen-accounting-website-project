import { Link } from 'react-router-dom'
import footerLogo from '../assets/ayala-accounting-assets/images/logo-reference-horizontal-layout.png'
import footerLeaf from '../assets/footer-leaf-transparent.png'
import mailIcon from '../assets/ayala-accounting-assets/icons/mail.svg?raw'
import phoneIcon from '../assets/ayala-accounting-assets/icons/phone.svg?raw'
import locationIcon from '../assets/ayala-accounting-assets/icons/location.svg?raw'
import { Icon } from './Icon'

const footerNavLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-cream bg-footer">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] w-[26%] md:w-[22%] aspect-[1740/904] bg-cream opacity-[0.16] hidden md:block"
          style={{
            maskImage: `url(${footerLeaf})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${footerLeaf})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
            <div>
              <img src={footerLogo} alt="Ayala Bookkeeping Co." className="h-10 w-auto" />
              <p className="font-heading italic text-lg text-cream/80 mt-6 leading-snug">
                Clear Numbers.
                <br />
                Brighter Tomorrows.
              </p>
            </div>

            <div>
              <ul className="space-y-3">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-cream mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-cream/70">
                <li className="flex items-center gap-2">
                  <Icon svg={phoneIcon} className="h-3.5 w-3.5 text-accent" /> (818) 555-0123
                </li>
                <li className="flex items-center gap-2">
                  <Icon svg={mailIcon} className="h-3.5 w-3.5 text-accent" /> hello@ayalaaccounting.co
                </li>
                <li className="flex items-center gap-2">
                  <Icon svg={locationIcon} className="h-3.5 w-3.5 text-accent" /> Los Angeles, CA
                </li>
              </ul>
            </div>

            <div className="flex items-center md:justify-end">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-cream/50 uppercase">
                People / Plans / Progress
              </span>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
            <p>© 2026 Ayala Accounting Co. All rights reserved.</p>
            <p>
              <a href="#" className="hover:text-cream transition-colors">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="hover:text-cream transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
