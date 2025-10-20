

const images = [
  '/assets/foto3.png',
  '/assets/foto4.png',
  '/assets/foto5.png',
  '/assets/foto6.png',
  '/assets/foto7.png',
  '/assets/foto8.png',
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
