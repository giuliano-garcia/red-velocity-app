export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-red-950 flex items-center justify-center text-center px-4">
      <div>
        <img
          src="https://i.pinimg.com/736x/83/c4/9b/83c49bae1cb1031adc1ca33515091aa2.jpg"
          alt="Logo Red Velocity Fest"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-red-600 object-cover"
        />
        <h1 className="text-5xl font-extrabold mb-6 text-white">RED VELOCITY 2026</h1>
        <p className="text-xl text-red-400 mb-4">15 y 16 de noviembre en el hipodromo  • San Miguel de Tucuman</p>
        <p className="text-lg text-gray-300 mb-10">El festival de música y cultura urbana más explosivo del año</p>
      </div>
    </section>
  )
}