import { Link } from 'react-router-dom'
import { Eyebrow } from './Eyebrow'
import leafBg from '../assets/ayala-accounting-assets/images/leaf-bg-image.png'

export function CtaSection() {
  return (
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
  )
}
