
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-tour-blue">Tour<span className="text-tour-green">Mate</span></span>
            </Link>
            <p className="text-tour-gray-dark text-sm mb-4">
              Conectando guías turísticos con agencias de viajes de manera simple y eficiente.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-tour-blue hover:text-tour-blue-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-tour-blue hover:text-tour-blue-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-tour-blue hover:text-tour-blue-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-tour-gray-dark mb-4">Guías</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register?role=guide" className="text-tour-gray hover:text-tour-blue transition">Regístrate como guía</Link></li>
              <li><Link to="/how-it-works?for=guides" className="text-tour-gray hover:text-tour-blue transition">Cómo funciona para guías</Link></li>
              <li><Link to="/success-stories?type=guides" className="text-tour-gray hover:text-tour-blue transition">Historias de éxito</Link></li>
              <li><Link to="/faq?for=guides" className="text-tour-gray hover:text-tour-blue transition">Preguntas frecuentes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-tour-gray-dark mb-4">Agencias</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register?role=agency" className="text-tour-gray hover:text-tour-blue transition">Regístrate como agencia</Link></li>
              <li><Link to="/how-it-works?for=agencies" className="text-tour-gray hover:text-tour-blue transition">Cómo funciona para agencias</Link></li>
              <li><Link to="/guides" className="text-tour-gray hover:text-tour-blue transition">Buscar guías</Link></li>
              <li><Link to="/faq?for=agencies" className="text-tour-gray hover:text-tour-blue transition">Preguntas frecuentes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-tour-gray-dark mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-tour-gray hover:text-tour-blue transition">Contacto</Link></li>
              <li><Link to="/terms" className="text-tour-gray hover:text-tour-blue transition">Términos y condiciones</Link></li>
              <li><Link to="/privacy" className="text-tour-gray hover:text-tour-blue transition">Política de privacidad</Link></li>
              <li><Link to="/help" className="text-tour-gray hover:text-tour-blue transition">Centro de ayuda</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-sm text-tour-gray">
          <p>© {new Date().getFullYear()} TourMate Connect. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
