import { PinIcon, Star } from 'lucide-react'
import notebook from '../../assets/notebook.png'
import rose from '../../assets/rose.png'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const lessons = [
  'Authenticity is stronger than imitation.',
  'Creativity requires discipline.',
  'Being different can become an advantage.',
  'Success is not only fame or money.',
  'A dream job should allow you to keep creating and evolving.',
]

export function LessonsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute -left-12 bottom-0 h-52 w-52 opacity-20 sm:h-72 sm:w-72"
        style={{ backgroundImage: `url(${rose})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div
        className="pointer-events-none absolute right-[-4rem] top-12 h-52 w-52 opacity-18 sm:h-72 sm:w-72"
        style={{ backgroundImage: `url(${notebook})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Lessons"
            title="What I Learn From Him"
            description="The strongest influence here is not imitation. It is permission to build an original path with discipline, honesty, and endurance."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson, index) => (
            <Reveal key={lesson} delay={index * 90}>
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#8b6a3c]/25 bg-[#f0debf]/90 p-6 text-ink shadow-paper transition duration-300 hover:-translate-y-1 hover:rotate-[0.4deg]">
                <div className="absolute right-5 top-5 text-wine/60">
                  <PinIcon className="h-5 w-5" />
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-wine/20 bg-wine/10 text-wine">
                  <Star className="h-4 w-4" />
                </span>
                <p className="mt-5 text-lg leading-8 text-ember">{lesson}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
