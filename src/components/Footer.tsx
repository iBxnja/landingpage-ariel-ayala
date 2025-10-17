import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-pad py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-600">© {new Date().getFullYear()} Ariel Ayala Mecánica. Todos los derechos reservados.</p>
        <div className="flex gap-4 text-gray-600">
          <a href="#servicios" className="hover:text-primary-700">Servicios</a>
          <a href="#contacto" className="hover:text-primary-700">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
