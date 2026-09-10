import type { ReactNode } from 'react'

type PageHeroSize = 'primary' | 'secondary'

const sizeClasses: Record<PageHeroSize, { section: string; image: string; text: string; content: string }> = {
  primary: {
    section: 'relative overflow-hidden',
    image:
      'h-64 w-full min-[640px]:h-80 min-[768px]:h-96 min-[1207px]:absolute min-[1207px]:inset-y-0 min-[1207px]:right-0 min-[1207px]:h-auto min-[1207px]:w-[60%]',
    text: 'relative px-6 py-12 min-[640px]:px-10 min-[640px]:py-16 min-[1207px]:flex min-[1207px]:min-h-[480px] min-[1207px]:items-center min-[1207px]:px-0 min-[1207px]:pl-16 min-[1207px]:py-20 min-[1280px]:min-h-[560px]',
    // Image column is 60% at the hero breakpoint, so cap the text at the remaining
    // 40% (minus the pl-16 left padding) so it can never run under the image.
    content: 'max-w-xl min-[1207px]:max-w-[min(calc(40%_-_4rem),36rem)]',
  },
  secondary: {
    section: 'relative overflow-hidden bg-cream-alt',
    image:
      'h-56 w-full min-[640px]:h-72 min-[768px]:h-88 min-[1207px]:absolute min-[1207px]:inset-y-0 min-[1207px]:right-0 min-[1207px]:h-auto min-[1207px]:w-[55%]',
    text: 'relative px-6 py-10 min-[640px]:px-10 min-[640px]:py-14 min-[1207px]:flex min-[1207px]:min-h-[440px] min-[1207px]:items-center min-[1207px]:px-0 min-[1207px]:pl-16 min-[1207px]:py-16 min-[1280px]:min-h-[480px]',
    // Image column is 55% at the hero breakpoint, so cap the text at the remaining
    // 45% (minus the pl-16 left padding) so it can never run under the image.
    content: 'max-w-xl min-[1207px]:max-w-[min(calc(45%_-_4rem),36rem)]',
  },
}

type PageHeroProps = {
  id?: string
  image: string
  imageAlt: string
  size?: PageHeroSize
  gradient?: boolean
  children: ReactNode
}

/**
 * Split hero layout: image and text sit side by side (image absolute-positioned
 * behind/beside the text) at 1207px and up, and stack — image on top, text below —
 * below that, so the image never overlaps the text at cramped widths.
 */
export function PageHero({ id, image, imageAlt, size = 'secondary', gradient = false, children }: PageHeroProps) {
  const classes = sizeClasses[size]

  return (
    <section id={id} className={classes.section}>
      <div className={classes.image}>
        <img
          src={image}
          alt={imageAlt}
          className={`h-full w-full object-cover object-center ${gradient ? 'min-[1207px]:object-right' : ''}`}
        />
      </div>
      {gradient && (
        <div className="absolute inset-0 hidden min-[1207px]:block bg-[linear-gradient(to_right,#fbf6f1_0%,#fbf6f1_38%,rgba(251,246,241,0)_58%)]" />
      )}
      <div className={classes.text}>
        <div className={classes.content}>{children}</div>
      </div>
    </section>
  )
}
