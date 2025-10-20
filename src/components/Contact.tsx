
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contacto" className="section-pad bg-gradient-to-b from-white to-blue-50">
      <div className="container-pad max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">¿Necesitás un turno?</h2>
          <p className="mt-3 text-lg text-gray-600">Comunicate con nosotros, estamos disponibles 24/7</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <FaWhatsapp className="text-3xl text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a
              className="text-primary-700 hover:text-primary-800 font-medium text-lg"
              href="https://wa.me/5493454946866"
              target="_blank"
              rel="noreferrer"
            >
              03454946866
            </a>
          </div>

          <div className="card text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
            <p className="text-gray-700">Isthilart y Cortada 148<br/>E3200 Concordia, Entre Ríos</p>
          </div>

          <div className="card text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
              <FaClock className="text-3xl text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Horario</h3>
            <p className="text-primary-700 font-bold text-lg">Abierto 24 horas</p>
            <p className="text-sm text-gray-600 mt-1">Todos los días</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5493454946866"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Solicitar turno por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
