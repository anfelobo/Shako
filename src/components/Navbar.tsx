import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type LanguageCode = 'es' | 'en'

const languages: Array<{ code: LanguageCode; flag: string; labelKey: string }> = [
  { code: 'es', flag: '🇨🇴', labelKey: 'language.es' },
  { code: 'en', flag: '🇺🇸', labelKey: 'language.en' },
]

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/uniforms', key: 'nav.uniforms' },
  { to: '/people', key: 'nav.people' },
  { to: '/battles', key: 'nav.battles' },
  { to: '/countries', key: 'nav.countries' },
  { to: '/timeline', key: 'nav.timeline' },
  { to: '/library', key: 'nav.library' },
  { to: '/search', key: 'nav.search' },
]

export default function Navbar() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const resolvedLanguage = (i18n.resolvedLanguage || i18n.language || 'es').startsWith('en') ? 'en' : 'es'
  const activeLanguage = languages.find((item) => item.code === resolvedLanguage) ?? languages[0]

  React.useEffect(() => {
    const handleResize = () => setMobileMenuOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
    setOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur dark:bg-[#071029]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-gold sm:h-10 sm:w-10" />
          <div className="text-base font-serif text-primary dark:text-gold sm:text-lg">América Uniformada</div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="transition hover:text-gold">
              {t(item.key)}
            </Link>
          ))}

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

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-gold hover:text-gold dark:border-gray-700 dark:text-gray-200"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden border-t border-gray-200 bg-white/95 dark:border-gray-700 dark:bg-[#071029]/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-4 sm:px-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm transition hover:bg-gray-100 hover:text-gold dark:hover:bg-white/10"
                >
                  {t(item.key)}
                </Link>
              ))}

              <div className="mt-2 rounded-xl border border-gray-200 p-2 dark:border-gray-700">
                <p className="px-2 pb-2 text-xs uppercase tracking-[0.24em] text-gray-500">{t('language.label')}</p>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleChange(item.code)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${resolvedLanguage === item.code ? 'bg-gold/10 text-gold' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`}
                  >
                    <span className="text-base">{item.flag}</span>
                    <span>{t(item.labelKey)}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
