const artists = [
  { name: "The Red Sparks", genre: "Rock", stage: "Main Stage" },
  { name: "Velocity Crew", genre: "Hip-Hop", stage: "Urban Stage" },
  { name: "Neon Pulse", genre: "Electrónica", stage: "Electronic Stage" },
  { name: "Crimson Riot", genre: "Punk", stage: "Main Stage" },
  { name: "Urban Legends", genre: "Rap", stage: "Urban Stage" },
  { name: "Red Horizon", genre: "Indie", stage: "Main Stage" },
]

export default function Artistas() {
  return (
    <section id="artistas" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Artistas 2026</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artists.map((artist, i) => (
          <div
            key={i}
            className="bg-red-950 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold">{artist.name}</h3>
            <p className="text-red-400 mt-1">{artist.genre}</p>
            <p className="text-gray-400 text-sm mt-2">{artist.stage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}