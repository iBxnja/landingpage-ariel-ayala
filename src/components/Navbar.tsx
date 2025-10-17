import React from 'react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container-pad h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white font-bold">AA</span>
          <span className="font-semibold">Ariel Ayala Mecánica</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-primary-700 transition-colors">{l.label}</a>
          ))}
          <a href="#contacto" className="btn-primary text-sm">Pedir turno</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-pad py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-700">{l.label}</a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary">Pedir turno</a>
          </div>
        </div>
      )}
    </header>
  )
}
