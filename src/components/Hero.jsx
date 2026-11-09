export default function Hero() {
  return (
    <section className="min-h-screen bg-red-950 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl font-extrabold mb-6 text-white">RED VELOCITY 2026</h1>
        <p className="text-xl text-red-400 mb-4">15 y 16 de noviembre en el hipodromo  • San Miguel de Tucuman</p>
        <p className="text-lg text-gray-300 mb-10">El festival de música y cultura urbana más explosivo del año</p>
        <a href="#tickets" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-bold text-white">
          Ver Entradas
        </a>
      </div>
    </section>
  )
}