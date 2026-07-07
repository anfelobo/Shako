import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-serif text-primary">América Uniformada</h1>
            <p className="mt-4 text-lg">Enciclopedia Digital de Uniformología Militar Americana</p>
            <button className="mt-6 px-5 py-3 bg-gold text-white rounded-md">Explorar colección</button>
          </div>
          <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-lg" />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Artículo destacado</h2>
          <div className="h-48 bg-white/60 dark:bg-white/5 rounded-lg" />
        </section>
      </main>
    </div>
  )
}
