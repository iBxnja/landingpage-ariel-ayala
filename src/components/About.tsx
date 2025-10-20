
export default function About() {
  return (
    <section id="sobre-mi" className="section-pad bg-gray-50">
      <div className="container-pad grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img className="w-full rounded-xl shadow-card object-cover h-72 sm:h-96" src="/assets/foto2.png" alt="Servicio Automotor Ariel Ayala" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sobre nosotros</h2>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Servicio Automotor Ariel Ayala</span> es un taller dedicado al mantenimiento y reparación automotor en Concordia, Entre Ríos.
            Trabajamos con compromiso, transparencia y dedicación para mantener tu vehículo en óptimas condiciones.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="card">Abierto 24 horas</li>
            <li className="card">Atención personalizada</li>
            <li className="card">Presupuestos claros</li>
            <li className="card">Garantía en trabajos</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
