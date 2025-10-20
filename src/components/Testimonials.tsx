import { useState, useEffect } from 'react'

const data = [
  { name: 'Juan Pérez', text: 'Excelente atención, solucionó el problema en el día y a buen precio.' },
  { name: 'María López', text: 'Muy profesional y claro al explicar. Súper recomendado.' },
  { name: 'Carlos Díaz', text: 'Trabajo impecable, el auto quedó perfecto. Volveré sin dudas.' },
  { name: 'Ana Martínez', text: 'Muy confiable y honesto. Me explicó todo lo que necesitaba mi auto.' },
  { name: 'Roberto Gómez', text: 'Servicio rápido y eficiente. Precios justos y trabajo de calidad.' },
]

export default function Testimonials() {
  const [offset, setOffset] = useState(0)
  const cardWidth = 384 + 24 // w-96 (384px) + gap (24px)
  const totalWidth = data.length * cardWidth

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1

        // Reinicia cuando completa un ciclo completo
        if (newOffset >= totalWidth) {
          return 0
        }

        return newOffset
      })
    }, 30) // Deslizamiento suave cada 30ms

    return () => clearInterval(timer)
  }, [totalWidth])

  return (
    <section id="testimonios" className="bg-gray-50 overflow-hidden py-16">
      <div className="container-pad">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Testimonios</h2>
          <p className="mt-3 text-gray-600">Lo que dicen nuestros clientes.</p>
        </div>
      </div>
      <div className="relative py-8">
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(-${offset}px)`,
            width: 'max-content'
          }}
        >
          {/* Duplicamos los testimonios múltiples veces para loop infinito */}
          {[...data, ...data, ...data, ...data].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-96">
              <figure className="card text-center min-h-[180px] flex flex-col justify-center">
                <blockquote className="text-gray-700 text-lg px-4">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-gray-900">{t.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
