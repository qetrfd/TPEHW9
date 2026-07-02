import { ArrowDown, Eye, Sparkles } from 'lucide-react'
import heroImage from '../../assets/hero_willwood.jpeg'
import moon from '../../assets/moon.png'
import piano from '../../assets/Piano.png'
import stageCurtains from '../../assets/Stage_Curtains.png'
import stars from '../../assets/stars.png'
import paperTexture from '../../assets/paper_texture.png'
import ornateFrame from '../../assets/ornate_frame.png'
import { Reveal } from './Reveal'
import { TypewriterText } from './TypewriterText'

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pb-24 pt-8 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/56 to-ink/18 lg:w-[64%]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] opacity-[0.92] sm:h-[34rem] lg:h-[36rem]"
        style={{ backgroundImage: `url(${stageCurtains})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-transparent via-transparent to-ink/80 sm:h-[38rem]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"
        style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="pointer-events-none absolute left-[-5%] top-20 h-40 w-40 opacity-80 sm:h-56 sm:w-56"
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translateY(calc(var(--scroll-y, 0px) * 0.09))',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-8 right-[-4%] h-48 w-48 opacity-55 sm:h-72 sm:w-72"
        style={{
          backgroundImage: `url(${piano})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translateY(calc(var(--scroll-y, 0px) * -0.05)) rotate(-7deg)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-end gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <Reveal className="relative pt-28 sm:pt-32 lg:pt-36">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ink/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold/90 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Interactive artistic presentation
          </div>
          <h1
            className="max-w-4xl text-5xl font-semibold leading-[0.95] text-parchment sm:text-6xl lg:text-7xl"
            style={{ textShadow: '0 12px 30px rgba(0, 0, 0, 0.36)' }}
          >
            Will Wood: The Architect of His Own Chaos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist/92 sm:text-xl">
            A role model for creativity, identity, and artistic freedom.
          </p>
          <div className="mt-8">
            <TypewriterText text="Creating without becoming someone else." />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#who"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/40 bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ink transition hover:-translate-y-0.5 hover:bg-[#d5a762]"
            >
              Enter the stage
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-parchment/25 bg-black/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-parchment transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-black/35"
            >
              See the evidence
              <Eye className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none" delay={150}>
          <div className="hero-portrait relative mx-auto aspect-[4/5] max-w-[30rem] overflow-hidden rounded-[2rem] border border-gold/30 bg-black/25 shadow-glow">
            <div
              className="absolute inset-4 rounded-[1.5rem] border border-parchment/20"
              style={{ backgroundImage: `url(${ornateFrame})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(8, 5, 6, 0.12), rgba(8, 5, 6, 0.7)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'translateY(calc(var(--scroll-y, 0px) * 0.04)) scale(1.04)',
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold/85">Stage entrance</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-mist/78">
                Independent art that turns intensity, humor, and performance into a personal language.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
