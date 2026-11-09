import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-red-950/90 backdrop-blur-md border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Red Velocity Fest</h1>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="hover:text-red-400 transition">Inicio</a>
          <a href="#artistas" className="hover:text-red-400 transition">Artistas</a>
          <a href="#entradas" className="hover:text-red-400 transition">Entradas</a>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-red-950 px-4 pb-4 space-y-4">
          <a href="#inicio" className="block py-2 hover:text-red-400" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#artistas" className="block py-2 hover:text-red-400" onClick={() => setOpen(false)}>Artistas</a>
          <a href="#entradas" className="block py-2 hover:text-red-400" onClick={() => setOpen(false)}>Entradas</a>
        </div>
      )}
    </nav>
  )
}