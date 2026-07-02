type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-parchment sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-mist/78 sm:text-base">{description}</p>
    </div>
  )
}
