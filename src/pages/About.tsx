import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-serif">Acerca del proyecto</h1>
        <p className="mt-4">Proyecto América Uniformada — enciclopedia digital de uniformología militar.</p>
      </main>
    </div>
  )
}
