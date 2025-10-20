

export default function Hero() {
  return (
    <section className="section-pad bg-gradient-to-b from-white to-blue-50" id="inicio">
      <div className="container-pad grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Servicio Automotor Ariel Ayala
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Taller mecánico en Concordia, Entre Ríos. Servicio honesto, rápido y con garantía.
            <span className="font-semibold text-gray-800 block mt-1">Abierto 24 horas</span>
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/5493454946866" target="_blank" rel="noreferrer" className="btn-primary">Hablar por WhatsApp</a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div className="card"><dt className="font-semibold">24 horas</dt><dd className="text-gray-600">Siempre abierto</dd></div>
            <div className="card"><dt className="font-semibold">Garantía</dt><dd className="text-gray-600">en trabajos</dd></div>
            <div className="card"><dt className="font-semibold">Turnos</dt><dd className="text-gray-600">por WhatsApp</dd></div>
          </dl>
        </div>
        <div className="order-first md:order-last">
          <img className="w-full rounded-xl shadow-card object-cover h-72 sm:h-96" src="/assets/foto1.png" alt="Taller mecánico Ariel Ayala" />
        </div>
      </div>
    </section>
  )
}
