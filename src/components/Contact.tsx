

export default function Contact() {
  return (
    <section id="contacto" className="section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contacto</h2>
          <p className="mt-3 text-gray-600">Escríbenos y te responderemos a la brevedad.</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li><strong>Tel/WhatsApp:</strong> <a className="text-primary-700" href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">+54 9 11 1234-5678</a></li>
            <li><strong>Email:</strong> taller.ariel.ayala@example.com</li>
            <li><strong>Ubicación:</strong> Tu ciudad, Argentina</li>
            <li><strong>Horario:</strong> Lun a Vie 9:00–18:00</li>
          </ul>
        </div>
        <form className="card">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="tu@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea className="mt-1 w-full rounded-md border px-3 py-2 h-32" placeholder="¿En qué podemos ayudarte?" />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-4">Enviar</button>
        </form>
      </div>
    </section>
  )
}
