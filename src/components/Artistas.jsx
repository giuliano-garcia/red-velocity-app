const artists = [
  { 
    name: "Los Chispas Rojas", 
    genre: "Rock", 
    stage: "Escenario Principal",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  { 
    name: "Crew Velocidad", 
    genre: "Hip-Hop", 
    stage: "Escenario Urbano",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
  },
  { 
    name: "Pulso Neón", 
    genre: "Electrónica", 
    stage: "Escenario Electrónico",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  { 
    name: "Motín Carmesí", 
    genre: "Punk", 
    stage: "Escenario Principal",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
  },
  { 
    name: "Leyendas Urbanas", 
    genre: "Rap", 
    stage: "Escenario Urbano",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop"
  },
  { 
    name: "Horizonte Rojo", 
    genre: "Indie", 
    stage: "Escenario Principal",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop"
  },
]

export default function Artistas() {
  return (
    <section id="artistas" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Artistas 2027</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artists.map((artist, i) => (
          <div
            key={i}
            className="bg-red-950 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-600"
            />
            <h3 className="text-xl font-bold">{artist.name}</h3>
            <p className="text-red-400 mt-1">{artist.genre}</p>
            <p className="text-gray-400 text-sm mt-2">{artist.stage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}