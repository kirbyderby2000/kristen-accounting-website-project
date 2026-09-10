import { Routes, Route, Link } from 'react-router-dom'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import heroImage from './assets/ayala-accounting-assets/images/hero-accounting-desk.png'
import iconBookkeeping from './assets/ayala-accounting-assets/icons/bookkeeping.svg?raw'
import iconReporting from './assets/ayala-accounting-assets/icons/financial-reporting.svg?raw'
import iconTax from './assets/ayala-accounting-assets/icons/tax-preparation.svg?raw'
import iconBusiness from './assets/ayala-accounting-assets/icons/small-business.svg?raw'
import { Icon } from './components/Icon'
import { Eyebrow } from './components/Eyebrow'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TestimonialsCarousel } from './components/TestimonialsCarousel'
import { LocationSection } from './components/LocationSection'
import { CtaSection } from './components/CtaSection'
import { ScrollToTop } from './components/ScrollToTop'

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
    title: 'Tax Preparation Support',
    description: 'Organized records and professional support for a smoother tax season.',
  },
  {
    icon: iconBusiness,
    title: 'Small Business Solutions',
    description: 'Customized services for entrepreneurs, freelancers, and growing businesses.',
  },
]

function Home() {
  return (
    <div className="bg-cream text-body font-sans">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="h-64 w-full min-[640px]:h-80 min-[768px]:h-96 min-[1207px]:absolute min-[1207px]:inset-y-0 min-[1207px]:right-0 min-[1207px]:h-auto min-[1207px]:w-[60%]">
            <img
              src={heroImage}
              alt="A mug reading Good Numbers, Brighter Days beside a stack of books on accounting, small business, and financial clarity"
              className="h-full w-full object-cover object-center min-[1207px]:object-right"
            />
          </div>
          <div className="absolute inset-0 hidden min-[1207px]:block bg-[linear-gradient(to_right,#fbf6f1_0%,#fbf6f1_38%,rgba(251,246,241,0)_58%)]" />
          <div className="relative px-6 py-12 min-[640px]:px-10 min-[640px]:py-16 min-[1207px]:flex min-[1207px]:min-h-[480px] min-[1207px]:items-center min-[1207px]:px-0 min-[1207px]:pl-16 min-[1207px]:py-20 min-[1280px]:min-h-[560px]">
            <div className="max-w-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    Clear Numbers.
                  </span>
                  <span className="h-px w-10 bg-accent/50" />
                </div>
                <span className="block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  A Brighter Tomorrow.
                </span>
              </div>
              <h1 className="font-heading text-heading text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] tracking-tight mt-6">
                Bookkeeping
                <br />
                for a Stronger
                <br />
                Business
              </h1>
              <p className="mt-6 text-base leading-relaxed max-w-md">
                We help small businesses and individuals stay organized, compliant, and
                confident with their finances — so you can focus on what matters most.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark transition-colors text-cream text-sm font-semibold px-6 py-3.5"
                >
                  Get in Touch <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LocationSection />

        {/* Services */}
        <section id="services" className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16 py-16 md:py-20 text-center">
            <Eyebrow align="center">Our Services</Eyebrow>
            <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4">
              Support at Every Step
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-xl mx-auto">
              Reliable bookkeeping and accounting services tailored to your needs.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col items-center text-center lg:px-4 ${
                    index > 0 ? 'lg:border-l lg:border-hairline' : ''
                  }`}
                >
                  <span className="h-16 w-16 rounded-full bg-accent-soft text-accent flex items-center justify-center mb-5">
                    <Icon svg={service.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-heading text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed max-w-[240px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsCarousel />

        <CtaSection background="cream-alt" />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
