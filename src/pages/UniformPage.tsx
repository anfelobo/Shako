import React from 'react'
import Navbar from '../components/Navbar'

export default function UniformPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src="/images/uniformes/3.jpeg" alt="Uniforme principal" className="h-96 w-full object-cover" />
            </div>
            <h1 className="mt-6 text-3xl font-serif">Casaca de granadero</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Argentina • 1810 • Ejército Patriota • Granaderos</p>
            <section className="mt-6">
              <h2 className="text-xl font-semibold">Descripción</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Galería</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <img src="/images/uniformes/1.jpeg" alt="Galería 1" className="h-48 w-full rounded-xl object-cover" />
                <img src="/images/uniformes/2.jpeg" alt="Galería 2" className="h-48 w-full rounded-xl object-cover" />
              </div>
            </section>
          </div>
          <aside>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-white/5">
              <h2 className="text-lg font-semibold">Ficha técnica</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li><span className="font-medium">País:</span> Argentina</li>
                <li><span className="font-medium">Conflicto:</span> Guerra de Independencia</li>
                <li><span className="font-medium">Ejército:</span> Ejército Patriota</li>
                <li><span className="font-medium">Sombrero:</span> Bicorne</li>
                <li><span className="font-medium">Colores:</span> Azul y dorado</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
