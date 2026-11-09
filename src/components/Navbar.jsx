export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-red-950/90 backdrop-blur-md border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Red Velocity Fest</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-red-400">Inicio</a>
          <a href="#lineup" className="hover:text-red-400">Artistas</a>
          <a href="#tickets" className="hover:text-red-400">Entradas</a>
        </div>
      </div>
    </nav>
  )
}