import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function FlagIcon({ language }: { language: 'es' | 'en' }) {
  if (language === 'es') {
    return (
      <svg viewBox="0 0 512 512" className="h-5 w-7 rounded-sm shadow-sm" aria-hidden="true">
        <rect width="512" height="512" rx="24" fill="#FCD116" />
        <rect y="256" width="512" height="256" fill="#003893" />
        <rect y="0" width="512" height="256" fill="#CE1126" />
        <path d="M256 296c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40Z" fill="#FCD116" />
        <path d="M256 234c8 0 14 6 14 14 0 8-6 14-14 14s-14-6-14-14c0-8 6-14 14-14Z" fill="#003893" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 512 512" className="h-5 w-7 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="512" height="512" rx="24" fill="#B22234" />
      <rect x="0" y="0" width="512" height="42.7" fill="#fff" />
      <rect x="0" y="85.3" width="512" height="42.7" fill="#fff" />
      <rect x="0" y="170.7" width="512" height="42.7" fill="#fff" />
      <rect x="0" y="256" width="512" height="42.7" fill="#fff" />
      <rect x="0" y="341.3" width="512" height="42.7" fill="#fff" />
      <rect x="0" y="426.7" width="512" height="42.7" fill="#fff" />
      <rect width="256" height="256" fill="#3C3B6E" />
      <path d="M24 24h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H24l8-8-8-8Z" fill="#fff" />
      <path d="M88 24h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H88l8-8-8-8Z" fill="#fff" />
      <path d="M152 24h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M216 24h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M24 88h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H24l8-8-8-8Z" fill="#fff" />
      <path d="M88 88h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H88l8-8-8-8Z" fill="#fff" />
      <path d="M152 88h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M216 88h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M24 152h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H24l8-8-8-8Z" fill="#fff" />
      <path d="M88 152h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H88l8-8-8-8Z" fill="#fff" />
      <path d="M152 152h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M216 152h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M24 216h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H24l8-8-8-8Z" fill="#fff" />
      <path d="M88 216h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8H88l8-8-8-8Z" fill="#fff" />
      <path d="M152 216h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
      <path d="M216 216h16l8 8 8-8h16l-8 8 8 8h-16l-8-8-8 8h-16l8-8-8-8Z" fill="#fff" />
    </svg>
  )
}

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
