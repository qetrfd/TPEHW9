import { useEffect, useState } from 'react'

type TypewriterTextProps = {
  text: string
  className?: string
}

export function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let frame = 0
    const interval = window.setInterval(() => {
      frame += 1
      setDisplayed(text.slice(0, frame))
      if (frame >= text.length) {
        window.clearInterval(interval)
      }
    }, 45)

    return () => window.clearInterval(interval)
  }, [text])

  return (
    <p className={`typewriter text-sm uppercase tracking-[0.2em] text-gold/90 ${className}`}>
      {displayed}
    </p>
  )
}
