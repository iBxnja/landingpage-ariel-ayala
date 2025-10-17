

const images = [
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515923162042-1f4a71faf4d5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="galeria" className="section-pad">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Galería</h2>
          <p className="mt-3 text-gray-600">Algunos de nuestros trabajos y el día a día en el taller.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Trabajo ${i+1}`} className="w-full h-36 sm:h-48 object-cover rounded-lg shadow" />
          ))}
        </div>
      </div>
    </section>
  )
}
