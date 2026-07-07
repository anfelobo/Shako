import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pt-24">
        <h1 className="text-3xl font-serif">{t('about.title')}</h1>
        <p className="mt-4">{t('about.description')}</p>
      </main>
    </div>
  )
}
