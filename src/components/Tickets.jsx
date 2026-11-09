export default function Entradas() {
  return (
    <section id="entradas" className="py-20 px-4 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Entradas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-neutral-900 p-8 rounded-2xl text-center flex flex-col">
          <h3 className="text-2xl font-bold mb-4">General</h3>
          <p className="text-4xl text-red-500 mb-6">$25.000</p>
          <button
            onClick={() => alert('Seleccionaste General')}
            className="mt-auto w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition">Comprar</button>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl text-center flex flex-col border-2 border-red-600">
          <div className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4 mx-auto">
            Recomendado
          </div>
          <h3 className="text-2xl font-bold mb-4">VIP</h3>
          <p className="text-4xl text-red-500 mb-6">$55.000</p>
          <button
            onClick={() => alert('Seleccionaste VIP')}
            className="mt-auto w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition"
          >
            Comprar VIP
          </button>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl text-center flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Experiencia Rock</h3>
          <p className="text-4xl text-red-500 mb-6">$85.000</p>
          <button
            onClick={() => alert('Seleccionaste Experiencia Rock')}
            className="mt-auto w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  )
}