import React from 'react'
import Navbar from '../components/Navbar'

export default function Library() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-serif">Biblioteca</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
        </p>
      </main>
    </div>
  )
}
