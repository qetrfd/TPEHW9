import { ReactNode } from 'react'
import backgroundDark from '../../assets/background_dark.png'
import stars from '../../assets/stars.png'
import paperDark from '../../assets/paper_dark.png'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative overflow-hidden bg-ink text-mist">
      <div
        className="fixed inset-0 opacity-90"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 6, 7, 0.7), rgba(12, 6, 7, 0.86)), url(${backgroundDark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.18] mix-blend-screen"
        style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.16]"
        style={{ backgroundImage: `url(${paperDark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="pointer-events-none fixed inset-0 bg-radialCabaret" />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
