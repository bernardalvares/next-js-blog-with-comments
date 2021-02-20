import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog para Joana
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Always connecting the dots {' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          and
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
        trusting the process
        </a>
        .
      </h4>
    </section>
  )
}
