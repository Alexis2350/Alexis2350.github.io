
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Search, Users, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tour-gray-dark mb-4">
                La plataforma que conecta a guías y agencias
              </h2>
              <p className="text-xl text-tour-gray max-w-2xl mx-auto">
                Herramientas diseñadas para simplificar la gestión de servicios turísticos y mejorar la experiencia tanto para guías como para agencias.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center bg-tour-blue/10 p-3 rounded-full mb-4">
                  <Search className="h-6 w-6 text-tour-blue" />
                </div>
                <h3 className="text-xl font-semibold text-tour-gray-dark mb-2">Búsqueda avanzada</h3>
                <p className="text-tour-gray">
                  Encuentra guías por destino, fechas, idiomas y especialidades.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center bg-tour-green/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-tour-green" />
                </div>
                <h3 className="text-xl font-semibold text-tour-gray-dark mb-2">Perfiles verificados</h3>
                <p className="text-tour-gray">
                  Guías profesionales con experiencia y valoraciones verificadas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center bg-tour-orange/10 p-3 rounded-full mb-4">
                  <Calendar className="h-6 w-6 text-tour-orange" />
                </div>
                <h3 className="text-xl font-semibold text-tour-gray-dark mb-2">Gestión de disponibilidad</h3>
                <p className="text-tour-gray">
                  Calendario intuitivo para coordinar y confirmar reservas.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center bg-tour-blue/10 p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-tour-blue" />
                </div>
                <h3 className="text-xl font-semibold text-tour-gray-dark mb-2">Chat integrado</h3>
                <p className="text-tour-gray">
                  Comunicación directa entre guías y agencias para una mejor coordinación.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 bg-tour-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Listo para revolucionar tu experiencia turística?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Únete a miles de guías y agencias que ya están aprovechando TourMate Connect para crecer y ofrecer mejores experiencias a sus clientes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register?role=guide">
                  <Button variant="secondary" className="px-8 py-6 text-lg w-full sm:w-auto">
                    Registrarme como guía
                  </Button>
                </Link>
                <Link to="/register?role=agency">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tour-blue px-8 py-6 text-lg w-full sm:w-auto">
                    Registrarme como agencia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
