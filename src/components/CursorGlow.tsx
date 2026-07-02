import { useEffect } from 'react'

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <div className="cursor-glow absolute inset-0" />
    </div>
  )
}
