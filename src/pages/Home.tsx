import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

const featuredUniforms = [
  {
    image: '/images/uniformes/1.jpeg',
    titleKey: 'home.featuredUniforms.granadero.title',
    descriptionKey: 'home.featuredUniforms.granadero.description',
  },
  {
    image: '/images/uniformes/2.jpeg',
    titleKey: 'home.featuredUniforms.campaign.title',
    descriptionKey: 'home.featuredUniforms.campaign.description',
  },
  {
    image: '/images/uniformes/3.jpeg',
    titleKey: 'home.featuredUniforms.officer.title',
    descriptionKey: 'home.featuredUniforms.officer.description',
  },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-3 pb-16 pt-24 sm:px-4">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-serif text-primary sm:text-5xl">{t('home.title')}</h1>
            <p className="mt-4 text-base sm:text-lg">{t('home.subtitle')}</p>
            <button className="mt-6 rounded-md bg-gold px-5 py-3 text-sm font-medium text-white sm:text-base">{t('home.button')}</button>
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg dark:bg-gray-800">
            <img src="/images/uniformes/1.jpeg" alt="Uniforme histórico" className="h-64 w-full object-contain p-2 sm:h-80" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">{t('home.featured')}</h2>
          <div className="grid gap-6 rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-white/5 sm:p-6 lg:grid-cols-[1.3fr_0.7fr]">
            <img src="/images/uniformes/2.jpeg" alt="Artículo destacado" className="h-56 w-full rounded-xl bg-gray-100 object-contain p-2 dark:bg-gray-800 sm:h-60" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">{t('home.collection')}</p>
              <h3 className="mt-2 text-2xl font-serif">{t('home.articleTitle')}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-200">{t('home.articleText')}</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">{t('home.sectionTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredUniforms.map((item) => (
              <article
                key={item.titleKey}
                className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5"
              >
                <img src={item.image} alt={t(item.titleKey)} className="h-48 w-full object-contain bg-gray-100 p-2 transition duration-300 group-hover:scale-105 dark:bg-gray-800" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#13294B] via-[#13294B]/70 to-transparent p-4">
                  <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-semibold text-white">{t(item.titleKey)}</h3>
                    <p className="mt-2 text-sm text-gray-200">{t(item.descriptionKey)}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary dark:text-white">{t(item.titleKey)}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{t(item.descriptionKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
