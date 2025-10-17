

const data = [
  { name: 'Juan Pérez', text: 'Excelente atención, solucionó el problema en el día y a buen precio.' },
  { name: 'María López', text: 'Muy profesional y claro al explicar. Súper recomendado.' },
  { name: 'Carlos Díaz', text: 'Trabajo impecable, el auto quedó perfecto. Volveré sin dudas.' },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad bg-gray-50">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Testimonios</h2>
          <p className="mt-3 text-gray-600">Lo que dicen nuestros clientes.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <figure key={i} className="card">
              <blockquote className="text-gray-700">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-gray-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
