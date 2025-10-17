import React from 'react'

const faqs = [
  { q: '¿Trabajan con turno?', a: 'Sí, recomendamos solicitar turno para brindar un mejor servicio y tiempos claros.' },
  { q: '¿Ofrecen garantía?', a: 'Sí, todos los trabajos cuentan con garantía de mano de obra.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Efectivo, transferencia y tarjetas seleccionadas.' },
  { q: '¿Cuánto demora una revisión?', a: 'Una revisión general suele demorar entre 30 y 60 minutos.' },
]

export default function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0)
  
  const toggleOpen = (index: number) => {
    setOpen(open === index ? null : index)
  }

  return (
    <section id="faq" className="section-pad">
      <div className="container-pad ">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y rounded-xl border bg-white">
          {faqs.map((f, i) => (
            <div key={i} className="border-b last:border-b-0">
              <button
                onClick={() => toggleOpen(i)}
                className="flex w-full cursor-pointer items-center justify-between px-4 py-4 font-medium text-gray-900 text-left hover:bg-gray-50 transition-colors"
              >
                {f.q}
                <span className="ml-4 text-xl transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: open === i ? '200px' : '0px',
                  opacity: open === i ? 1 : 0
                }}
              >
                <div className="px-4 pb-4 text-gray-700">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
