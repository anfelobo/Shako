import React from 'react'
import Navbar from '../components/Navbar'

const featuredUniforms = [
  {
    title: 'Casaca de granadero',
    image: '/images/uniformes/1.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Uniforme de campaña',
    image: '/images/uniformes/2.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
  },
  {
    title: 'Vestimenta de oficial',
    image: '/images/uniformes/3.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4 pb-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-serif text-primary">América Uniformada</h1>
            <p className="mt-4 text-lg">Enciclopedia Digital de Uniformología Militar Americana</p>
            <button className="mt-6 px-5 py-3 bg-gold text-white rounded-md">Explorar colección</button>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src="/images/uniformes/1.jpeg" alt="Uniforme histórico" className="h-80 w-full object-cover" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Artículo destacado</h2>
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] rounded-2xl bg-white/70 p-6 shadow-sm dark:bg-white/5">
            <img src="/images/uniformes/2.jpeg" alt="Artículo destacado" className="h-60 w-full rounded-xl object-cover" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Colección</p>
              <h3 className="mt-2 text-2xl font-serif">Uniformes de la independencia</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Uniformes destacados</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredUniforms.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5"
              >
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#13294B] via-[#13294B]/70 to-transparent p-4">
                  <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
