import { Icon } from './Icon'
import { Eyebrow } from './Eyebrow'
import locationIcon from '../assets/ayala-accounting-assets/icons/location.svg?raw'
import losAngelesImage from '../assets/venti-views-PiqHSHYO3Uw-unsplash.jpg'

export function LocationSection() {
  return (
    <section className="bg-cream-alt">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div className="relative h-64 sm:h-80 lg:h-auto">
          <img
            src={losAngelesImage}
            alt="Palm trees against the Los Angeles skyline"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-14 md:px-10 lg:px-16 lg:py-20">
          <div className="max-w-md">
            <Eyebrow>Our Location</Eyebrow>
            <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4">
              Based in Los Angeles
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed">
              We're proud to support individuals and small businesses throughout the Los Angeles
              area and beyond. Most of our services can be handled remotely, so we can work with
              you wherever you are.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ink">
              <span className="h-10 w-10 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                <Icon svg={locationIcon} className="h-4 w-4" />
              </span>
              Los Angeles, CA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
