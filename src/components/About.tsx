import React from 'react'

export default function About() {
  return (
    <section id="sobre-mi" className="section-pad bg-gray-50">
      <div className="container-pad grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img className="w-full rounded-xl shadow-card object-cover h-72 sm:h-96" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop" alt="Ariel Ayala en el taller" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sobre mí</h2>
          <p className="mt-4 text-gray-700">
            Soy <span className="font-semibold">Ariel Ayala</span>, mecánico automotriz con más de 10 años de experiencia en diagnóstico y reparación.
            Trabajo con compromiso, transparencia y pasión por los autos.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="card">Atención personalizada</li>
            <li className="card">Repuestos de calidad</li>
            <li className="card">Presupuestos claros</li>
            <li className="card">Garantía en trabajos</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
