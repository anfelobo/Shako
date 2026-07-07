import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-[#071029]/70 backdrop-blur z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-md" />
          <div className="text-lg font-serif text-primary dark:text-gold">América Uniformada</div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/">Inicio</Link>
          <Link to="/uniforms">Uniformes</Link>
          <Link to="/people">Personajes</Link>
          <Link to="/battles">Batallas</Link>
          <Link to="/countries">Países</Link>
          <Link to="/timeline">Cronología</Link>
          <Link to="/library">Biblioteca</Link>
          <Link to="/search">Buscador</Link>
        </nav>
      </div>
    </header>
  )
}
