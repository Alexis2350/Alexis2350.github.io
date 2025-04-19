
import { CheckCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tour-gray-dark mb-4">Cómo funciona TourMate Connect</h2>
          <p className="text-xl text-tour-gray max-w-2xl mx-auto">
            Una plataforma diseñada para simplificar la conexión entre guías turísticos profesionales y agencias de viajes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-tour-gray-dark mb-6">Para guías turísticos</h3>
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-green mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Crea tu perfil profesional</h4>
                  <p className="text-tour-gray">Destaca tus habilidades, idiomas, experiencia y servicios especializados.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-green mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Gestiona tu disponibilidad</h4>
                  <p className="text-tour-gray">Actualiza tu calendario para mostrar cuándo puedes ofrecer tus servicios.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-green mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Recibe solicitudes directas</h4>
                  <p className="text-tour-gray">Las agencias te contactarán para reservar tus servicios en las fechas que has habilitado.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-green mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Aumenta tu visibilidad y reputación</h4>
                  <p className="text-tour-gray">Recibe valoraciones de las agencias y mejora tu posicionamiento en la plataforma.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-tour-gray-dark mb-6">Para agencias de viajes</h3>
            <ul className="space-y-4">
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-blue mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Busca guías por filtros específicos</h4>
                  <p className="text-tour-gray">Encuentra guías según destino, fecha, idioma, especialidad y valoraciones.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-blue mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Consulta perfiles detallados</h4>
                  <p className="text-tour-gray">Revisa experiencia, servicios, valoraciones y precios antes de contactar.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-blue mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Haz reservas de forma eficiente</h4>
                  <p className="text-tour-gray">Solicita disponibilidad y coordina directamente con los guías en la plataforma.</p>
                </div>
              </li>
              <li className="flex">
                <CheckCircle className="h-6 w-6 text-tour-blue mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-tour-gray-dark">Valora los servicios contratados</h4>
                  <p className="text-tour-gray">Contribuye a la comunidad calificando a los guías tras cada experiencia.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
