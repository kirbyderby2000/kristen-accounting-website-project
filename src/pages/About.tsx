import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { Eyebrow } from '../components/Eyebrow'
import heroImage from '../assets/ayala-accounting-assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import logoPlaceholder from '../assets/ayala-accounting-assets/images/logo-reference-horizontal-layout.png'
import leafBg from '../assets/ayala-accounting-assets/images/leaf-bg-image.png'
import botanicalLeaf from '../assets/ayala-accounting-assets/icons/botanical-leaf.svg?raw'

const integrityIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 12v6"/>
  <path d="M14 18h36"/>
  <path d="M32 18v30"/>
  <path d="M20 54h24"/>
  <path d="M20 18l-8 16a8 8 0 0 0 16 0z"/>
  <path d="M44 18l-8 16a8 8 0 0 0 16 0z"/>
</svg>`

const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 54C20 45 9 35 9 23c0-7.5 5.6-13 12.8-13 5.2 0 9 3 10.2 7.4C33.2 13 37 10 42.2 10 49.4 10 55 15.5 55 23c0 12-11 22-23 31z"/>
</svg>`

const leafIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 56V30"/>
  <path d="M32 31c0-12.5 8-21 21-23 2.3 12.6-6.3 23-21 23z"/>
  <path d="M32 40c0-9.4-6.3-15.6-16-16.6-1 9.4 5.4 16.6 16 16.6z"/>
</svg>`

const values = [
  {
    icon: integrityIcon,
    title: 'Integrity',
    description:
      'Clear communication, accurate work, and a commitment to doing things the right way.',
  },
  {
    icon: heartIcon,
    title: 'Care',
    description:
      'We take the time to understand our clients, their businesses, and what matters to them.',
  },
  {
    icon: leafIcon,
    title: 'Progress',
    description:
      'Good financial organization creates the clarity and confidence to keep moving forward.',
  },
]

const whyPoints = [
  {
    number: '01',
    title: 'Books That Stay Organized',
    description: 'Accurate, up-to-date records so you always know where you stand.',
  },
  {
    number: '02',
    title: 'Financials You Can Understand',
    description: 'Clear reporting and straightforward explanations without unnecessary complexity.',
  },
  {
    number: '03',
    title: 'Support That Fits Your Business',
    description:
      "Personalized service based on how you actually work — not a one-size-fits-all package.",
  },
  {
    number: '04',
    title: 'A Relationship You Can Rely On',
    description:
      'Responsive, consistent support from someone who gets to know you and your business.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Needs',
    description:
      'Start with a conversation about your business, your current bookkeeping, and where you could use support.',
  },
  {
    number: '02',
    title: 'Find the Right Approach',
    description:
      "We'll recommend the services that make sense for your situation and create a plan that works for you.",
  },
  {
    number: '03',
    title: 'Stay Organized',
    description:
      'With the right support in place, you can spend less time worrying about your books and more time focusing on what matters.',
  },
]

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-body font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-alt">
          <div className="absolute inset-y-0 right-0 w-full sm:w-[70%] lg:w-[55%]">
            <img
              src={heroImage}
              alt="A laptop, open notebook, coffee mug, and flowers on a wooden desk"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative flex min-h-[380px] items-center pl-6 py-14 sm:min-h-[420px] md:pl-10 md:py-16 lg:min-h-[440px] lg:pl-16 xl:min-h-[480px]">
            <div className="max-w-xl">
              <Eyebrow>Our Story</Eyebrow>
              <h1 className="font-heading text-heading text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] leading-[1.12] tracking-tight mt-6">
                Helping You Understand the Numbers Behind Your Business
              </h1>
              <p className="mt-6 text-base leading-relaxed max-w-md">
                Running a business comes with enough to manage. Keeping your books organized and
                understanding where you stand financially shouldn't add to the stress.
              </p>
              <p className="mt-4 text-base leading-relaxed max-w-md">
                Ayala Bookkeeping Co. provides dependable, personalized bookkeeping support
                designed to give individuals and small business owners clearer records, better
                visibility, and greater confidence in their finances.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                >
                  Contact Us <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-8 text-right">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-accent/70 uppercase">
            People / Plans / Progress
          </span>
        </div>

        {/* Clarity */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden bg-accent-soft flex items-center justify-center aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] p-12">
                <img
                  src={logoPlaceholder}
                  alt="Ayala Bookkeeping Co."
                  className="w-full max-w-[220px]"
                />
              </div>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-6 -top-14 w-56 md:w-72 text-accent hidden lg:block"
                >
                  <Icon svg={botanicalLeaf} className="w-full h-auto" />
                </div>
                <div className="relative">
                  <Eyebrow>About Ayala Bookkeeping Co.</Eyebrow>
                  <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4">
                    Good Bookkeeping Should Give You Clarity
                  </h2>
                  <p className="mt-5 text-sm md:text-base leading-relaxed max-w-lg">
                    Ayala Bookkeeping Co. was founded with a simple idea: that organized finances
                    create more freedom.
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed max-w-lg">
                    We work with individuals, entrepreneurs, and small businesses to keep their
                    financial records accurate, organized, and easy to understand. We take the
                    time to learn about your goals, your challenges, and how you work so we can
                    provide support that actually fits your needs.
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed max-w-lg">
                    Our goal is simple: to give you organized books, understandable financial
                    information, and one less thing to worry about — so you can focus on what
                    matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-blush">
          <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16 py-16 md:py-20 text-center">
            <Eyebrow align="center">Our Values</Eyebrow>
            <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4">
              Guided by What Matters
            </h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex flex-col items-center text-center sm:px-4 ${
                    index > 0 ? 'sm:border-l sm:border-hairline' : ''
                  }`}
                >
                  <span className="h-16 w-16 rounded-full bg-accent-soft text-accent flex items-center justify-center mb-5">
                    <Icon svg={value.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-heading text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed max-w-[240px]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ayala */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <Eyebrow>Why Ayala</Eyebrow>
                <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4 max-w-lg">
                  Bookkeeping You Can Feel Confident About
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm">
                We provide more than just organized records — we help you build a stronger
                foundation for your business or personal finances.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {whyPoints.map((point) => (
                <div key={point.number}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-accent">{point.number}</span>
                    <span className="h-px w-8 bg-accent/50" />
                  </div>
                  <h3 className="font-heading text-heading text-lg">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <Eyebrow>Working Together</Eyebrow>
                <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4 max-w-lg">
                  Getting Started Is Simple
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm">
                We've designed a straightforward process so you can get the support you need
                without the guesswork.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <span className="h-12 w-12 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0 font-heading text-lg">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-heading text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-blush">
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] w-[36%] md:w-[26%] aspect-[1230/1278] bg-accent opacity-[0.18] hidden md:block"
            style={{
              maskImage: `url(${leafBg})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url(${leafBg})`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <Eyebrow>Ready to Talk?</Eyebrow>
              <h2 className="font-heading text-heading text-2xl md:text-3xl mt-4">
                Let's Start a Conversation.
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md">
                Every business is different. Tell us a little about your goals and we'll be happy
                to discuss how we can help.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5 shrink-0"
            >
              Contact Us <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
