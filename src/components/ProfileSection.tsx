import { Brain, MicVocal, Music, PenTool } from 'lucide-react'
import portrait from '../../assets/portrait_willwood.jpeg'
import tornPaper from '../../assets/torn_paper.png'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const cards = [
  {
    title: 'Musician',
    text: 'A pianist and songwriter who treats composition like stagecraft.',
    icon: Music,
  },
  {
    title: 'Writer',
    text: 'He writes lyrics that combine wit, vulnerability, and narrative tension.',
    icon: PenTool,
  },
  {
    title: 'Performer',
    text: 'His live presence feels theatrical, precise, and emotionally charged.',
    icon: MicVocal,
  },
  {
    title: 'Creative thinker',
    text: 'He connects music, ideas, and identity instead of staying inside one lane.',
    icon: Brain,
  },
]

export function ProfileSection() {
  return (
    <section id="who" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div
            className="pointer-events-none absolute -left-4 -top-6 h-28 w-32 opacity-60"
            style={{ backgroundImage: `url(${tornPaper})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-parchment/15 bg-black/20 shadow-paper">
            <img
              src={portrait}
              alt="Portrait of Will Wood wearing a dark suit and hat"
              className="aspect-[5/4] w-full object-cover object-center"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeader
              eyebrow="Identity"
              title="Who Is Will Wood?"
              description="Will Wood is an American singer-songwriter, pianist, composer, performer, and multidisciplinary artist known for mixing music, theater, storytelling, philosophy, humor, and emotional honesty."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="group h-full rounded-[1.2rem] border border-parchment/12 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/35">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-parchment">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-mist/76">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
