import React from 'react'
import Navbar from '../components/Navbar'

export default function UniformPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg" />
            <h1 className="mt-6 text-3xl font-serif">Nombre del Uniforme</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">País • Año • Ejército • Unidad</p>
            <section className="mt-6">
              <h2 className="text-xl font-semibold">Descripción</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-200">Descripción detallada...</p>
            </section>
          </div>
          <aside>
            <div className="bg-white/60 dark:bg-white/5 rounded-lg p-4">Infobox</div>
          </aside>
        </div>
      </main>
    </div>
  )
}
