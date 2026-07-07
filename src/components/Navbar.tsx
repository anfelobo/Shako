import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type LanguageCode = 'es' | 'en'

const languages: Array<{ code: LanguageCode; flag: string; labelKey: string }> = [
  { code: 'es', flag: '🇨🇴', labelKey: 'language.es' },
  { code: 'en', flag: '🇺🇸', labelKey: 'language.en' },
]

export default function Navbar() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const resolvedLanguage = (i18n.resolvedLanguage || i18n.language || 'es').startsWith('en') ? 'en' : 'es'
  const activeLanguage = languages.find((item) => item.code === resolvedLanguage) ?? languages[0]

  const handleChange = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur dark:bg-[#071029]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary to-gold" />
          <div className="text-lg font-serif text-primary dark:text-gold">América Uniformada</div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link to="/" className="transition hover:text-gold">{t('nav.home')}</Link>
          <Link to="/uniforms" className="transition hover:text-gold">{t('nav.uniforms')}</Link>
          <Link to="/people" className="transition hover:text-gold">{t('nav.people')}</Link>
          <Link to="/battles" className="transition hover:text-gold">{t('nav.battles')}</Link>
          <Link to="/countries" className="transition hover:text-gold">{t('nav.countries')}</Link>
          <Link to="/timeline" className="transition hover:text-gold">{t('nav.timeline')}</Link>
          <Link to="/library" className="transition hover:text-gold">{t('nav.library')}</Link>
          <Link to="/search" className="transition hover:text-gold">{t('nav.search')}</Link>

          <div className="relative ml-2">
            <button
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 transition hover:border-gold hover:text-gold dark:border-gray-700"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label={t('language.label')}
            >
              <span className="text-lg leading-none">{activeLanguage.flag}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-11 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-slate-900/95"
                  role="menu"
                  aria-label={t('language.label')}
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleChange(item.code)}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${resolvedLanguage === item.code ? 'bg-gold/10 text-gold' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`}
                      role="menuitem"
                    >
                      <span className="text-base">{item.flag}</span>
                      <span>{t(item.labelKey)}</span>
                    </button>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  )
}
