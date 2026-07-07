import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UniformPage from './pages/UniformPage'
import NotFound from './pages/NotFound'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uniforms/:id" element={<UniformPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
