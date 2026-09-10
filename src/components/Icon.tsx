export function Icon({ svg, className }: { svg: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-auto ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
