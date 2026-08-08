import { Scale, MapPin, Phone, Mail } from 'lucide-react'

  // IMPORTANTE: lucide-react YA NO incluye los iconos de marcas
  // (Facebook, X, LinkedIn, YouTube). Por eso las redes sociales
  // van como SVG inline (paths oficiales de Simple Icons).

  const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )

  const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )

  const legalLinks = [
    'Services', 'About', 'Careers', 'Privacy Policy', 'Terms',
  ]

  const socialIcons = [
    { name: 'Facebook', Icon: FacebookIcon },
    { name: 'X / Twitter', Icon: XIcon },
    { name: 'LinkedIn', Icon: LinkedInIcon },
    { name: 'YouTube', Icon: YoutubeIcon },
  ]

  const Footer = () => {
    return (
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda: logo + contacto */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </span>
              <span className="font-bold tracking-wider text-sm">
                JUSTICE LAW GROUP
              </span>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sky-accent shrink-0" />
                123 Justice Avenue, Suite 500, New York, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-accent shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-accent shrink-0" />
                info@justicelawgroup.com
              </li>
            </ul>
          </div>

          {/* Columna derecha: mapa placeholder */}
          <div>
            <h4 className="font-bold mb-4">Find Us Here</h4>
            <div className="relative rounded-xl overflow-hidden border border-white/20 h-64 bg-navy-light/40 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-white" />
              <span className="absolute bottom-3 text-xs text-gray-300">
                Office Map Placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <ul className="flex flex-wrap gap-6 text-xs text-gray-400">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {socialIcons.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer