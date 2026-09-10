import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import mailIcon from '../assets/ayala-accounting-assets/icons/mail.svg?raw'
import phoneIcon from '../assets/ayala-accounting-assets/icons/phone.svg?raw'
import locationIcon from '../assets/ayala-accounting-assets/icons/location.svg?raw'

const chevronDownIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`

const subjectOptions = [
  'General Inquiry',
  'Bookkeeping Services',
  'Financial Reporting',
  'Tax Preparation Support',
  'Small Business Solutions',
  'Other',
]

const contactDetails = [
  {
    icon: mailIcon,
    title: 'Email',
    lines: ['hello@ayalabookkeeping.co'],
  },
  {
    icon: phoneIcon,
    title: 'Phone',
    lines: ['(818) 555-0123', 'Mon – Fri, 9AM – 5PM'],
  },
  {
    icon: locationIcon,
    title: 'Location',
    lines: ['Los Angeles, CA', 'Serving individuals and small businesses throughout LA.'],
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream text-body font-sans">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Get in Touch */}
            <div className="lg:pr-16">
              <h1 className="font-heading text-heading text-4xl md:text-[2.75rem]">
                Get in Touch
              </h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md">
                Have a question, want to learn more about our services, or ready to get started?
                We'd love to hear from you. Send us a message and we'll get back to you within 1–2
                business days.
              </p>

              <div className="mt-10 space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <span className="h-14 w-14 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0">
                      <Icon svg={detail.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-heading text-lg">{detail.title}</h3>
                      {detail.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Send Us a Message */}
            <div className="lg:pl-16 lg:border-l lg:border-hairline">
              <h2 className="font-heading text-heading text-4xl md:text-[2.75rem]">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-4 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-4 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="relative">
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full appearance-none rounded-lg border border-hairline bg-cream-alt/40 px-4 py-4 text-sm focus:outline-none focus:border-accent ${
                      form.subject ? 'text-ink' : 'text-body/60'
                    }`}
                  >
                    <option value="" disabled hidden>
                      Subject *
                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-accent">
                    <Icon svg={chevronDownIcon} className="h-4 w-4" />
                  </span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about your needs…"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-hairline bg-cream-alt/40 px-4 py-4 text-sm text-ink placeholder:text-body/60 focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                  >
                    Send Message <span aria-hidden>→</span>
                  </button>
                </div>

                <p className="text-xs text-body/80">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="underline hover:text-accent transition-colors">
                    Privacy Policy.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
