import { Music4, PenLine, Radio, Sparkles } from 'lucide-react'
import piano from '../../assets/Piano.png'
import moon from '../../assets/moon.png'
import typewriter from '../../assets/typewriter.png'
import paperTexture from '../../assets/paper_texture.png'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const jobTraits = [
  { title: 'Create music', icon: Music4 },
  { title: 'Tell stories', icon: PenLine },
  { title: 'Perform live', icon: Radio },
  { title: 'Keep evolving', icon: Sparkles },
]

export function DreamJobSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute left-[-5rem] top-10 h-52 w-52 opacity-25 sm:h-72 sm:w-72"
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translateY(calc(var(--scroll-y, 0px) * 0.04))',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-4rem] top-20 h-60 w-60 opacity-20 sm:h-80 sm:w-80"
        style={{
          backgroundImage: `url(${piano})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translateY(calc(var(--scroll-y, 0px) * -0.03)) rotate(8deg)',
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-[#8b6a3c]/30 bg-[#f0debf]/90 p-7 text-ink shadow-paper sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-36 w-48 opacity-25"
            style={{ backgroundImage: `url(${typewriter})`, backgroundSize: 'contain', backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat' }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-wine">Dream job</p>
            <h3 className="mt-4 text-3xl font-semibold text-ember sm:text-4xl">Living by Creating</h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ember/88">
              His dream job is not just being a musician, but living as an artist who can create music, tell stories, perform, express ideas, connect with audiences, and continue evolving.
            </p>
          </div>
        </Reveal>
        <div>
          <Reveal delay={100}>
            <SectionHeader
              eyebrow="Ambition"
              title="An artistic life, not a single label"
              description="What makes this dream job compelling is its shape. It is broad enough to hold music, writing, performance, and thought, while still feeling deeply personal."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {jobTraits.map(({ title, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 70 + 140}>
                <div className="rounded-[1.25rem] border border-parchment/12 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/35">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-parchment">{title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
