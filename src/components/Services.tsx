
import { FaTools, FaOilCan, FaCarBattery, FaSnowflake, FaWrench, FaAlignCenter } from 'react-icons/fa'

const services = [
  { icon: FaWrench, title: 'Mecánica general', desc: 'Diagnóstico, reparación y mantenimiento para todas las marcas.' },
  { icon: FaAlignCenter, title: 'Alineación y balanceo', desc: 'Conducción estable y desgaste parejo de neumáticos.' },
  { icon: FaOilCan, title: 'Cambio de aceite y filtros', desc: 'Servicio rápido y control por seguridad.' },
  { icon: FaCarBattery, title: 'Baterías y electricidad', desc: 'Revisión de carga, alternador y arranque.' },
  { icon: FaTools, title: 'Frenos y suspensión', desc: 'Pastillas, discos, amortiguadores y más.' },
  { icon: FaSnowflake, title: 'Aire acondicionado', desc: 'Carga de gas, limpieza y reparación.' },
]

export default function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="container-pad">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Servicios</h2>
          <p className="mt-3 text-gray-600">Soluciones integrales para que tu auto esté siempre como nuevo.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <Icon className="h-7 w-7 text-primary-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
