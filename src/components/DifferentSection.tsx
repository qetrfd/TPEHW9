import { Eye, Palette, Sparkles, Type } from 'lucide-react'
import sketchEye from '../../assets/sketch_eye.png'
import sketchFlower from '../../assets/Sketch_flower.png'
import sketchRat from '../../assets/sketch_rat.png'
import typewriter from '../../assets/typewriter.png'
import ornateFrame from '../../assets/ornate_frame.png'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const facets = [
  {
    title: 'Genre refusal',
    text: 'He refuses to fit into one genre or category.',
    icon: Eye,
  },
  {
    title: 'Creative mixture',
    text: 'His work mixes rock, jazz, folk, cabaret, punk, theater, comedy, philosophy, and psychological themes.',
    icon: Palette,
  },
  {
    title: 'Identity as method',
    text: 'Difference is not decoration in his work. It becomes the structure of the art itself.',
    icon: Sparkles,
  },
  {
    title: 'Language with bite',
    text: 'He can be theatrical, reflective, funny, and unsettling without losing clarity.',
    icon: Type,
  },
]

const curiosities = [
  { image: sketchEye, rotation: '-6deg', label: 'Surreal eye sketch' },
  { image: sketchFlower, rotation: '7deg', label: 'Surreal flower sketch' },
  { image: sketchRat, rotation: '-4deg', label: 'Surreal rat sketch' },
  { image: typewriter, rotation: '5deg', label: 'Typewriter detail' },
]

export function DifferentSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Difference"
            title="What Makes Him Different?"
            description="This is where the page turns into a cabinet of curiosities: not because the work is random, but because it keeps combining disciplines without flattening them into a brand formula."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {facets.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="group relative overflow-hidden rounded-[1.6rem] border border-parchment/12 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-black/35">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-10"
                    style={{ backgroundImage: `url(${ornateFrame})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 text-xl font-semibold text-parchment">{title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-mist/76">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={130}>
            <div className="relative min-h-[30rem] rounded-[2rem] border border-parchment/12 bg-black/25 p-6 shadow-paper">
              <div className="grid h-full grid-cols-2 gap-4">
                {curiosities.map(({ image, rotation, label }, index) => (
                  <div
                    key={label}
                    className="group flex items-center justify-center overflow-hidden rounded-[1.25rem] border border-parchment/10 bg-[#f0debf]/8 p-4 transition duration-300 hover:border-gold/35 hover:bg-[#f0debf]/10"
                    style={{ transform: `rotate(${rotation}) translateY(${index % 2 === 0 ? '-2px' : '8px'})` }}
                  >
                    <img
                      src={image}
                      alt={index === 3 ? '' : label}
                      aria-hidden={index === 3 ? 'true' : undefined}
                      loading="lazy"
                      className="max-h-52 w-full object-contain opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
