import React from 'react'

export default function Hero() {
  return (
    <section className="section-pad bg-gradient-to-b from-white to-blue-50" id="inicio">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Mantenimiento y reparación automotriz de confianza
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Taller mecánico integral en tu ciudad. Servicio honesto, rápido y con garantía.
            Atención por <span className="font-semibold text-gray-800">Ariel Ayala</span>.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="btn-primary">Hablar por WhatsApp</a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div className="card"><dt className="font-semibold">+10 años</dt><dd className="text-gray-600">de experiencia</dd></div>
            <div className="card"><dt className="font-semibold">Garantía</dt><dd className="text-gray-600">en mano de obra</dd></div>
            <div className="card"><dt className="font-semibold">Turnos</dt><dd className="text-gray-600">rápidos</dd></div>
          </dl>
        </div>
        <div className="order-first md:order-last">
          <img className="w-full rounded-xl shadow-card object-cover h-72 sm:h-96" src="https://images.unsplash.com/photo-1542367597-8849eb47a8a8?q=80&w=1400&auto=format&fit=crop" alt="Taller mecánico" />
        </div>
      </div>
    </section>
  )
}
