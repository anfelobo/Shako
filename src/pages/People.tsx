import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

type Leader = {
  name: string
  country: string
  role: string
  summary: string
}

export default function People() {
  const { t } = useTranslation()
  const leaders = t('pages.people.leaders', { returnObjects: true }) as Leader[]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-serif">{t('pages.people.title')}</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-200">{t('pages.people.description')}</p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-700 dark:bg-white/5">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">{leader.country}</p>
              <h2 className="mt-2 text-xl font-semibold">{leader.name}</h2>
              <p className="mt-2 text-sm font-medium text-primary dark:text-gold">{leader.role}</p>
              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-200">{leader.summary}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
