import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UniformPage from './pages/UniformPage'
import Uniforms from './pages/Uniforms'
import People from './pages/People'
import Battles from './pages/Battles'
import Countries from './pages/Countries'
import TimelinePage from './pages/TimelinePage'
import Library from './pages/Library'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uniforms" element={<Uniforms />} />
      <Route path="/uniforms/:id" element={<UniformPage />} />
      <Route path="/people" element={<People />} />
      <Route path="/battles" element={<Battles />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/library" element={<Library />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
