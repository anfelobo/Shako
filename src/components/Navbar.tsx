import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const labels = {
  es: {
    home: 'Inicio',
    uniforms: 'Uniformes',
    people: 'Personajes',
    battles: 'Batallas',
    countries: 'Países',
    timeline: 'Cronología',
    library: 'Biblioteca',
    search: 'Buscador',
  },
  en: {
    home: 'Home',
    uniforms: 'Uniforms',
    people: 'Characters',
    battles: 'Battles',
    countries: 'Countries',
    timeline: 'Timeline',
    library: 'Library',
    search: 'Search',
  },
}

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const t = labels[language]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-[#071029]/70 backdrop-blur z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-md" />
          <div className="text-lg font-serif text-primary dark:text-gold">América Uniformada</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/">{t.home}</Link>
          <Link to="/uniforms">{t.uniforms}</Link>
          <Link to="/people">{t.people}</Link>
          <Link to="/battles">{t.battles}</Link>
          <Link to="/countries">{t.countries}</Link>
          <Link to="/timeline">{t.timeline}</Link>
          <Link to="/library">{t.library}</Link>
          <Link to="/search">{t.search}</Link>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-gold hover:text-gold dark:border-gray-700"
            aria-label="Cambiar idioma"
          >
            <span className="text-base">{language === 'es' ? '🇺🇸' : '🇪🇸'}</span>
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
