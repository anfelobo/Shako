import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif">404</h1>
        <p className="mt-4">Página no encontrada.</p>
        <Link to="/" className="mt-6 inline-block text-gold">Volver al inicio</Link>
      </div>
    </div>
  )
}
