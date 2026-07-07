import React from 'react'
import Navbar from '../components/Navbar'

export default function Search() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-serif">Buscador</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
      </main>
    </div>
  )
}
