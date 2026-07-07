import React from 'react'
import Navbar from '../components/Navbar'

export default function Countries() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-serif">Países</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
      </main>
    </div>
  )
}
