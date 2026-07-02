import { ArrowUp } from 'lucide-react'
import sun from '../../assets/sun.png'
import stageCurtains from '../../assets/Stage_Curtains.png'
import stars from '../../assets/stars.png'
import { Reveal } from './Reveal'

export function FinalReflection() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-45"
        style={{ backgroundImage: `url(${stageCurtains})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"
        style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 opacity-20 sm:h-56 sm:w-56"
        style={{ backgroundImage: `url(${sun})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/75">Final reflection</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-parchment sm:text-5xl">
            Success is creating something that represents you.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-mist/82">
            “I do not only want to use creativity. I want to build something that proves who I am.”
          </p>
          <a
            href="#top"
            className="mx-auto mt-12 inline-flex items-center justify-center gap-3 rounded-full border border-gold/40 bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ink transition hover:-translate-y-0.5 hover:bg-[#d5a762]"
          >
            Start Again
            <ArrowUp className="h-4 w-4" />
          </a>
          <p className="mt-16 text-sm uppercase tracking-[0.28em] text-mist/58">
            Created as an interactive presentation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
