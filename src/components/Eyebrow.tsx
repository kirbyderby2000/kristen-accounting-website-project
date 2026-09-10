export function Eyebrow({
  children,
  align = 'left',
}: {
  children: string
  align?: 'left' | 'center'
}) {
  if (align === 'center') {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-accent/50" />
        <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {children}
        </span>
        <span className="h-px w-8 bg-accent/50" />
      </div>
    )
  }
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {children}
      </span>
      <span className="h-px w-10 bg-accent/50" />
    </div>
  )
}
