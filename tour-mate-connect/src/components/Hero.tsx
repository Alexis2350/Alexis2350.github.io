
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative bg-tour-gray-light overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&h=1000" 
          alt="Paisaje turístico" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tour-blue/20 to-tour-gray-light/20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tour-gray-dark mb-6">
            Conectando <span className="text-tour-blue">guías turísticos</span> con <span className="text-tour-green">agencias de viajes</span>
          </h1>
          
          <p className="text-xl text-tour-gray-dark mb-8">
            La plataforma que revoluciona la forma en que los guías turísticos y las agencias de viajes colaboran. Encuentra los mejores guías o conecta con agencias en destinos de todo el mundo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register?role=guide">
              <Button className="bg-tour-blue hover:bg-tour-blue-dark text-white px-8 py-6 text-lg w-full sm:w-auto">
                Registrarme como guía
              </Button>
            </Link>
            <Link to="/register?role=agency">
              <Button variant="outline" className="border-tour-blue text-tour-blue hover:bg-tour-blue hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                Registrarme como agencia
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-tour-blue font-bold text-2xl mb-2">+5,000</h3>
                <p className="text-tour-gray-dark">Guías registrados</p>
              </div>
              <div>
                <h3 className="text-tour-blue font-bold text-2xl mb-2">+1,200</h3>
                <p className="text-tour-gray-dark">Agencias activas</p>
              </div>
              <div>
                <h3 className="text-tour-blue font-bold text-2xl mb-2">+50,000</h3>
                <p className="text-tour-gray-dark">Reservas realizadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
