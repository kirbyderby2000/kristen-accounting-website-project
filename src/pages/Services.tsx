import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { Eyebrow } from '../components/Eyebrow'
import heroImage from '../assets/ayala-accounting-assets/images/pexels-artempodrez-6779567.jpg'
import deskImage from '../assets/ayala-accounting-assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import reportsImage from '../assets/ayala-accounting-assets/images/pexels-artempodrez-6779567.jpg'
import leafBg from '../assets/ayala-accounting-assets/images/leaf-bg-image.png'
import iconBookkeeping from '../assets/ayala-accounting-assets/icons/bookkeeping.svg?raw'
import iconReporting from '../assets/ayala-accounting-assets/icons/financial-reporting.svg?raw'
import iconTax from '../assets/ayala-accounting-assets/icons/tax-preparation.svg?raw'
import iconBusiness from '../assets/ayala-accounting-assets/icons/small-business.svg?raw'

const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4L19 6"/></svg>`

const services = [
  {
    number: '01',
    icon: iconBookkeeping,
    title: 'Bookkeeping',
    tagline: 'Accurate, organized records so you always know where you stand.',
    description:
      'We keep your financial records current and organized so you can spend less time managing the numbers and more time running your business.',
    items: [
      'Transaction categorization',
      'Bank and credit card reconciliations',
      'Accounts payable & receivable',
      'Monthly bookkeeping',
      'Cleanup and catch-up bookkeeping',
      'QuickBooks support',
    ],
    image: deskImage,
    imageAlt: 'A laptop and open notebook with a pen on a wooden desk',
  },
  {
    number: '02',
    icon: iconReporting,
    title: 'Financial Reporting',
    tagline: 'Clear insights to help you make informed decisions.',
    description:
      "We prepare easy-to-understand financial reports that give you a clear picture of how your business is performing and where your money is going.",
    items: [
      'Profit & loss statements',
      'Balance sheets',
      'Cash flow reporting',
      'Monthly or quarterly reporting',
      'Customized financial reports',
      'Trend analysis and insights',
    ],
    image: reportsImage,
    imageAlt: 'Two professionals reviewing financial charts and reports with a calculator',
  },
  {
    number: '03',
    icon: iconTax,
    title: 'Tax Preparation Support',
    tagline: 'Organized records and professional support for a smoother tax season.',
    description:
      'We help you stay prepared by keeping your financial records organized and providing the information and support your tax preparer needs.',
    items: [
      'Year-round record organization',
      'Documentation support',
      'Coordination with your tax preparer',
      'Identification of potential deductions',
      'Prior year file organization',
      'Guidance on tax-related questions',
    ],
    image: deskImage,
    imageAlt: 'An open notebook and laptop on a desk, organized ahead of tax season',
  },
  {
    number: '04',
    icon: iconBusiness,
    title: 'Small Business Solutions',
    tagline: 'Customized services for entrepreneurs, freelancers, and growing businesses.',
    description:
      'We offer flexible, personalized support to help you build strong financial habits, streamline your processes, and focus on what matters most — growing your business.',
    items: [
      'Business setup assistance',
      'Ongoing bookkeeping support',
      'QuickBooks setup & training',
      'Payroll coordination',
      'Financial process organization',
      'Scalable solutions as you grow',
    ],
    image: reportsImage,
    imageAlt: 'Two professionals collaborating over financial reports and charts',
  },
]

export function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-body font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-alt">
          <div className="absolute inset-y-0 right-0 w-full sm:w-[70%] lg:w-[55%]">
            <img
              src={heroImage}
              alt="Two professionals reviewing financial reports, charts, and a calculator at a desk"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative flex min-h-[380px] items-center pl-6 py-14 sm:min-h-[420px] md:pl-10 md:py-16 lg:min-h-[440px] lg:pl-16 xl:min-h-[480px]">
            <div className="max-w-xl">
              <Eyebrow>Our Services</Eyebrow>
              <h1 className="font-heading text-heading text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] leading-[1.08] tracking-tight mt-6">
                Practical Support
                <br />
                for a <span className="italic">Brighter</span>
                <br />
                Tomorrow.
              </h1>
              <p className="mt-6 text-base leading-relaxed max-w-md">
                From day-to-day bookkeeping to long-term planning support, we provide reliable,
                personalized services to help individuals and small businesses stay organized and
                confident with their finances.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                >
                  Schedule a Consultation <span aria-hidden>→</span>
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

        {/* Service list */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-10 md:py-14">
            {services.map((service, index) => {
              const reversed = index % 2 === 1

              const textCol = (
                <div key="text">
                  <span className="h-14 w-14 rounded-full bg-accent-soft text-accent flex items-center justify-center mb-5">
                    <Icon svg={service.icon} className="h-6 w-6" />
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-accent">{service.number}</span>
                    <span className="h-px w-8 bg-accent/50" />
                  </div>
                  <h3 className="font-heading text-heading text-2xl md:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-ink font-medium leading-relaxed">{service.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed max-w-sm">{service.description}</p>
                </div>
              )

              const checklistCol = (
                <ul key="checklist" className="space-y-3.5 lg:border-l lg:border-hairline lg:pl-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink">
                      <span className="h-5 w-5 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0">
                        <Icon svg={checkIcon} className="h-2.5 w-2.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )

              const imageCol = (
                <div
                  key="image"
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[220px] lg:min-h-[280px]"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              )

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center ${
                    index !== 0 ? 'mt-16 md:mt-24' : ''
                  }`}
                >
                  {reversed
                    ? [imageCol, textCol, checklistCol]
                    : [textCol, checklistCol, imageCol]}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-blush">
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[15%] w-[36%] md:w-[26%] aspect-[1230/1278] bg-accent opacity-[0.18] hidden md:block"
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
              <Eyebrow>Let's Work Together</Eyebrow>
              <h2 className="font-heading text-heading text-2xl md:text-3xl mt-4">
                Not Sure Which Service Is Right for You?
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md">
                Every business is different. Tell us a little about what you need, and we'll help
                determine the right level of support.
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
