import { Disc3, Radio, Theater } from 'lucide-react'
import redThread from '../../assets/red_thread.png'
import albumCover from '../../assets/album-cover.jpeg'
import albumEverything from '../../assets/album_everything_is_a_lot.jpeg'
import albumSelfIsh from '../../assets/album_self_ish.jpeg'
import albumNormal from '../../assets/album_normal_album.jpg'
import albumCamp from '../../assets/album_camp_here_&_there.jpg'
import albumMakeIt from '../../assets/album_in_case_i_make_it.jpeg'
import albumDie from '../../assets/album_in_case_i_die.jpeg'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const milestones = [
  {
    title: 'Will Wood and the Tapeworms',
    description: 'A theatrical and chaotic creative era that introduced a bold independent voice.',
    image: albumCover,
    icon: Theater,
  },
  {
    title: 'Everything Is A Lot',
    description: 'A project filled with intensity, genre shifts, humor, and emotional contrast.',
    image: albumEverything,
    icon: Disc3,
  },
  {
    title: 'SELF-iSH',
    description: 'A concept-driven work that explores identity, performance, and self-perception.',
    image: albumSelfIsh,
    icon: Disc3,
  },
  {
    title: 'The Normal Album',
    description: 'A sharper theatrical reflection on normality, social pressure, and individuality.',
    image: albumNormal,
    icon: Disc3,
  },
  {
    title: 'Camp Here & There original soundtrack',
    description: 'A project showing his ability to compose for story, atmosphere, and character.',
    image: albumCamp,
    icon: Radio,
  },
  {
    title: '“In case I make it,”',
    description: 'A more intimate and reflective work focused on vulnerability, growth, and survival.',
    image: albumMakeIt,
    icon: Disc3,
  },
  {
    title: 'IN CASE I DIE',
    description: 'A live project that highlights performance, audience connection, and the living nature of art.',
    image: albumDie,
    icon: Theater,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      <div
        className="thread-layer pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `url(${redThread})`,
          backgroundSize: '138% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: 'translateY(calc(var(--scroll-y, 0px) * 0.03))',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink via-ink/65 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/78 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Sequence"
            title="A Theatrical Evidence Board"
            description="The story is not about one clean line. It is a chain of eras, albums, and performances that keep proving the same thing: originality can become a career."
            align="center"
          />
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-[1.35rem] top-0 hidden h-full w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 md:block" />
          <div className="space-y-8">
            {milestones.map(({ title, description, image, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="timeline-card relative grid gap-5 rounded-[1.8rem] border border-parchment/12 bg-black/25 p-5 backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-black/35 md:grid-cols-[auto_1fr] md:gap-8 md:p-6">
                  <div className="relative hidden md:block">
                    <span className="absolute left-0 top-4 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-ink text-gold shadow-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-[15rem_1fr]">
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-parchment/15 bg-ember/60">
                      <img
                        src={image}
                        alt={`${title} cover`}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition duration-500 hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="mb-3 flex items-center gap-3 md:hidden">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink text-gold">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] text-gold/75">Clue {index + 1}</span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.35em] text-gold/75">Clue {index + 1}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-parchment">{title}</h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-mist/76 sm:text-base">{description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
