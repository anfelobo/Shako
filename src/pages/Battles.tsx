import React from 'react'
import Navbar from '../components/Navbar'

const battles = [
  {
    name: 'Batalla de Ayacucho',
    date: '9 de diciembre de 1824',
    place: 'Perú',
    significance: 'Fue la última gran victoria independentista en Sudamérica y consolidó la emancipación del continente andino.',
  },
  {
    name: 'Batalla de Maipú',
    date: '5 de abril de 1818',
    place: 'Chile',
    significance: 'Marca el triunfo definitivo de los patriotas chilenos sobre las fuerzas realistas y abre la ruta a la independencia chilena.',
  },
  {
    name: 'Batalla de Boyacá',
    date: '7 de agosto de 1819',
    place: 'Colombia',
    significance: 'Permitió abrir el camino hacia la independencia de la Nueva Granada y consolidó a Simón Bolívar.',
  },
  {
    name: 'Batalla de La Maipú',
    date: '1814',
    place: 'Argentina',
    significance: 'Fue decisiva para la independencia del Río de la Plata y fortaleció el liderazgo de José de San Martín.',
  },
  {
    name: 'Batalla de Chacabuco',
    date: '12 de febrero de 1817',
    place: 'Chile',
    significance: 'Constituyó un gran triunfo patriota que permitió la liberación de Chile del dominio realista.',
  },
]

export default function Battles() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-5xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-serif">Batallas de la independencia americana</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200">
          Estas campañas marcaron el derrocamiento del dominio colonial español en América Latina y transformaron el mapa político del continente.
        </p>

        <div className="mt-8 grid gap-6">
          {battles.map((battle) => (
            <article key={battle.name} className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-700 dark:bg-white/5">
              <h2 className="text-xl font-semibold">{battle.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">{battle.date} • {battle.place}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-200">{battle.significance}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
