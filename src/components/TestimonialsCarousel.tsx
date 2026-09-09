import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import quoteIcon from '../assets/ayala-accounting-assets/icons/quote.svg?raw'
import arrowLeft from '../assets/ayala-accounting-assets/icons/arrow-left.svg?raw'
import arrowRight from '../assets/ayala-accounting-assets/icons/arrow-right.svg?raw'
import leafBg from '../assets/ayala-accounting-assets/images/leaf-bg-image.png'
import { Icon } from './Icon'
import { Eyebrow } from './Eyebrow'
import testimonials from '../data/testimonials.json'

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="relative overflow-hidden bg-blush">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[10%] w-[42%] md:w-[36%] aspect-[1230/1278] bg-accent opacity-[0.16] hidden md:block"
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
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-16 py-16 md:py-20 text-center relative">
        <Eyebrow align="center">What Our Clients Say</Eyebrow>
        <h2 className="font-heading text-heading text-3xl md:text-4xl mt-4">
          Trusted by Business Owners Like You
        </h2>

        <div className="mt-10 flex items-center justify-center gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="hidden sm:flex h-10 w-10 rounded-full bg-cream/70 border border-hairline items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors shrink-0 disabled:opacity-40 disabled:pointer-events-none"
          >
            <Icon svg={arrowLeft} className="h-4 w-4" />
          </button>

          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="min-w-0 flex-[0_0_100%] px-1" key={index}>
                  <div className="bg-cream rounded-2xl shadow-[0_10px_25px_-8px_rgba(43,36,32,0.12)] p-8 md:p-10 text-left">
                    <Icon svg={quoteIcon} className="h-8 w-8 text-accent" />
                    <p className="mt-4 font-heading text-ink text-lg md:text-xl leading-relaxed">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-6 text-sm font-semibold tracking-[0.1em] text-ink uppercase">
                      {testimonial.name}
                    </p>
                    <p className="text-xs font-medium tracking-[0.1em] text-body/60 uppercase">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="hidden sm:flex h-10 w-10 rounded-full bg-cream/70 border border-hairline items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors shrink-0 disabled:opacity-40 disabled:pointer-events-none"
          >
            <Icon svg={arrowRight} className="h-4 w-4" />
          </button>
        </div>

        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial from ${testimonial.name}`}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex ? 'w-6 bg-accent' : 'w-2 bg-accent/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
