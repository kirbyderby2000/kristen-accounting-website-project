import { useState } from 'react'
import logo from './assets/logo.png'
import heroImage from './assets/hero-image.jpg'
import laPhoto from './assets/la-photo.jpg'
import leafAccent from './assets/leaf-accent.png'
import footerLeaf from './assets/footer-leaf.png'
import quoteIcon from './assets/quote-icon.png'
import footerBackground from './assets/footer-background.jpg'
import iconBookkeeping from './assets/icon-bookkeeping.png'
import iconReporting from './assets/icon-reporting.png'
import iconTax from './assets/icon-tax.png'
import iconBusiness from './assets/icon-business.png'
import iconPayroll from './assets/icon-payroll.png'
import iconAdvisory from './assets/icon-advisory.png'

const navLinks = ['Home', 'Services', 'About', 'Testimonials']

const stats = [
  { value: '2018', label: 'Established' },
  { value: '8+', label: 'Years of Experience' },
  { value: '300+', label: 'Clients Served' },
  { value: '1:1', label: 'Personalized Support' },
]

const services = [
  {
    icon: iconBookkeeping,
    title: 'Bookkeeping',
    description: 'Accurate, up-to-date records so you always know where you stand.',
  },
  {
    icon: iconReporting,
    title: 'Financial Reporting',
    description: 'Clear insights to help you make informed decisions.',
  },
  {
    icon: iconTax,
    title: 'Tax Preparation & Planning',
    description: 'Organized records and proactive strategies for a smoother tax season.',
  },
  {
    icon: iconBusiness,
    title: 'Business Formation',
    description: 'Guidance for starting and growing your business with confidence.',
  },
  {
    icon: iconPayroll,
    title: 'Payroll Services',
    description: 'Reliable, compliant payroll support tailored to your needs.',
  },
  {
    icon: iconAdvisory,
    title: 'Small Business Advisory',
    description: 'Practical solutions for long-term growth and success.',
  },
]

const footerNavLinks = ['Home', 'Services', 'About', 'Testimonials', 'Contact']

function Eyebrow({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {children}
      </span>
      <span className="h-px w-10 bg-accent/50" />
    </div>
  )
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="bg-cream text-body font-sans">
      {/* Header / Nav */}
      <header className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Ayala Accounting Co."
              className="h-10 md:h-12 w-auto mix-blend-multiply"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium text-ink hover:text-accent transition-colors ${
                  link === 'Home' ? 'border-b-2 border-accent pb-1' : ''
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5"
            >
              Get in Touch <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-6 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Accounting & Advisory</Eyebrow>
              <h1 className="font-heading text-ink text-[2.75rem] sm:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] tracking-tight mt-6">
                Expert Accounting for a{' '}
                <em className="text-accent italic">Brighter</em> Tomorrow.
              </h1>
              <p className="mt-6 text-base leading-relaxed max-w-md">
                We help individuals and businesses stay organized, compliant, and confident
                with their finances — so you can focus on what matters most.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                >
                  Schedule a Consultation <span aria-hidden>→</span>
                </a>
                <a
                  href="#services"
                  className="text-sm font-semibold text-ink border-b border-ink/40 hover:border-ink pb-1"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="A mug reading Good Numbers, Brighter Days beside a stack of books on planning, tax strategy, business growth, and peace of mind"
                className="w-full h-auto rounded-2xl object-cover shadow-[var(--shadow,0_20px_40px_-15px_rgba(43,36,32,0.25))]"
              />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-hairline">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-4 flex justify-end">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-body/60 uppercase">
              People / Plans / Progress
            </span>
          </div>
          <div className="border-t border-hairline">
            <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-8 grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-4 py-4 md:py-0 ${
                    i % 2 === 0 ? 'border-r' : ''
                  } md:border-r md:last:border-r-0 border-hairline`}
                >
                  <div className="font-heading text-ink text-3xl md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold tracking-[0.15em] text-body/70 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* From our desk to yours */}
        <section className="relative overflow-hidden">
          <img
            src={leafAccent}
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute -right-10 top-0 h-full max-h-[420px] w-auto opacity-30 mix-blend-multiply hidden md:block"
          />
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <Eyebrow>A Better Way Forward</Eyebrow>
                <h2 className="font-heading text-ink text-2xl md:text-[1.75rem] mt-4">
                  From our desk to yours.
                </h2>
                <p className="mt-2 text-base leading-relaxed max-w-sm">
                  Accurate financials. Practical advice. A long-term partner you can count on.
                </p>
              </div>
              <div className="lg:border-l border-hairline lg:pl-16">
                <p className="font-heading italic text-ink text-xl md:text-2xl leading-snug">
                  “A well-kept ledger is a form of quiet confidence.”
                </p>
                <p className="mt-4 text-base leading-relaxed max-w-md">
                  We believe good accounting does more than keep you compliant — it gives you
                  clarity, freedom, and the confidence to make what's next possible.
                </p>
                <p className="mt-4 text-sm font-semibold text-body/70">
                  — The Ayala Accounting Co. Team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-cream-alt">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <Eyebrow>Our Services</Eyebrow>
                <h2 className="font-heading text-ink text-2xl md:text-[1.75rem] mt-4 max-w-xl">
                  Comprehensive Support for Individuals & Businesses.
                </h2>
              </div>
              <a
                href="#services"
                className="text-sm font-semibold text-accent hover:text-accent-dark shrink-0"
              >
                View All Services <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-10 border-t border-hairline">
              {services.map((service) => (
                <a
                  key={service.title}
                  href="#contact"
                  className="group flex items-center gap-5 border-b border-hairline py-5 hover:bg-cream/60 transition-colors"
                >
                  <span className="shrink-0 h-12 w-12 rounded-full bg-accent-soft flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt=""
                      aria-hidden
                      className="h-6 w-6 mix-blend-multiply"
                    />
                  </span>
                  <span className="w-full sm:w-56 shrink-0 font-heading text-ink text-lg text-left">
                    {service.title}
                  </span>
                  <span className="hidden sm:block flex-1 text-sm text-body text-left">
                    {service.description}
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto text-accent group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Local expertise */}
        <section id="about" className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <img
              src={laPhoto}
              alt="Palm trees overlooking the Los Angeles skyline at sunset"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div>
              <Eyebrow>Rooted in Los Angeles</Eyebrow>
              <h2 className="font-heading text-ink text-2xl md:text-[1.75rem] mt-4">
                Local Expertise. Lasting Relationships.
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-md">
                Ayala Accounting Co. is a Los Angeles-based firm dedicated to helping
                individuals, entrepreneurs, and small businesses achieve financial clarity. We
                combine personalized service with years of experience to provide practical
                solutions you can trust.
              </p>
              <a
                href="#about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
              >
                Learn More About Us <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-cream-alt">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <Eyebrow>Kind Words</Eyebrow>
                <h2 className="font-heading text-ink text-2xl md:text-[1.75rem] mt-4">
                  Trusted by Business Owners Like You.
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="h-10 w-10 rounded-full border border-hairline flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="h-10 w-10 rounded-full border border-hairline flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-10 bg-cream rounded-2xl shadow-[0_10px_25px_-8px_rgba(43,36,32,0.12)] p-8 md:p-10 max-w-2xl">
              <img
                src={quoteIcon}
                alt=""
                aria-hidden
                className="h-8 w-8 opacity-80 mix-blend-multiply"
              />
              <p className="mt-4 font-heading text-ink text-lg md:text-xl leading-relaxed">
                “Ayala Accounting Co. has been a game changer for our business. They're
                professional, responsive, and truly care about our success.”
              </p>
              <p className="mt-6 text-sm font-semibold tracking-[0.1em] text-ink uppercase">
                Maria S.
              </p>
              <p className="text-xs font-medium tracking-[0.1em] text-body/60 uppercase">
                Small Business Owner
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`h-2 rounded-full transition-all ${
                    dot === 2 ? 'w-6 bg-accent' : 'w-2 bg-accent/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>Let's Talk</Eyebrow>
              <h2 className="font-heading text-ink text-2xl md:text-[1.75rem] mt-4">
                A conversation, in <em className="text-accent italic">confidence</em>.
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-sm">
                Have questions or ready to get started? Send us a message and we'll get back to
                you soon.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="mailto:hello@ayalaaccounting.co"
                  className="flex items-center gap-3 text-ink hover:text-accent transition-colors"
                >
                  <span aria-hidden>✉</span> hello@ayalaaccounting.co
                </a>
                <a
                  href="tel:+18185550123"
                  className="flex items-center gap-3 text-ink hover:text-accent transition-colors"
                >
                  <span aria-hidden>☎</span> (818) 555-0123
                </a>
                <p className="flex items-center gap-3 text-ink">
                  <span aria-hidden>📍</span> Los Angeles, CA
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-3 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-3 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-3 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-3 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                >
                  Send Message <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="relative text-cream bg-footer bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBackground})` }}
      >
        <div className="bg-footer/90">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
              <div>
                <span className="font-heading italic text-xl text-cream">Ayala</span>
                <span className="block text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase mt-1">
                  Accounting Co. —
                </span>
                <p className="font-heading italic text-lg text-cream/80 mt-6 leading-snug">
                  Clear Numbers.
                  <br />
                  Brighter Tomorrows.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-cream mb-4">Home</h3>
                <ul className="space-y-3">
                  {footerNavLinks.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-sm text-cream/70 hover:text-cream transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-cream mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-cream/70">
                  <li className="flex items-center gap-2">
                    <span aria-hidden>☎</span> (818) 555-0123
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden>✉</span> hello@ayalaaccounting.co
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden>📍</span> Los Angeles, CA
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between">
                <img
                  src={footerLeaf}
                  alt=""
                  aria-hidden
                  className="h-16 w-auto opacity-90 mix-blend-multiply"
                />
                <span className="text-[11px] font-semibold tracking-[0.25em] text-cream/50 uppercase mt-6 md:mt-0">
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
    </div>
  )
}

export default App
