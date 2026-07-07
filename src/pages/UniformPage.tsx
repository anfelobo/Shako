import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

export default function UniformPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src="/images/uniformes/3.jpeg" alt="Uniforme principal" className="h-96 w-full object-cover" />
            </div>
            <h1 className="mt-6 text-3xl font-serif">{t('uniform.title')}</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{t('uniform.meta')}</p>
            <section className="mt-6">
              <h2 className="text-xl font-semibold">{t('uniform.descriptionTitle')}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-200">{t('uniform.descriptionText')}</p>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold">{t('uniform.galleryTitle')}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <img src="/images/uniformes/1.jpeg" alt="Galería 1" className="h-48 w-full rounded-xl object-cover" />
                <img src="/images/uniformes/2.jpeg" alt="Galería 2" className="h-48 w-full rounded-xl object-cover" />
              </div>
            </section>
          </div>
          <aside>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-white/5">
              <h2 className="text-lg font-semibold">{t('uniform.techTitle')}</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li><span className="font-medium">{t('uniform.country')}:</span> Argentina</li>
                <li><span className="font-medium">{t('uniform.conflict')}:</span> Guerra de Independencia</li>
                <li><span className="font-medium">{t('uniform.army')}:</span> Ejército Patriota</li>
                <li><span className="font-medium">{t('uniform.hat')}:</span> Bicorne</li>
                <li><span className="font-medium">{t('uniform.colors')}:</span> Azul y dorado</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
