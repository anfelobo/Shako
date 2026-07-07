import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

export default function Uniforms() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24">
        <h1 className="text-3xl font-serif">{t('pages.uniforms.title')}</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200">{t('pages.uniforms.description')}</p>
      </main>
    </div>
  )
}
