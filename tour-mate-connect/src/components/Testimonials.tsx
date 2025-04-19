
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: "guide" | "agency";
  company?: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "guide",
    location: "Barcelona, España",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "Desde que me uní a TourMate Connect, he duplicado mis reservas mensuales. La plataforma me ha permitido conectar con agencias internacionales que antes no podía alcanzar."
  },
  {
    id: 2,
    name: "María González",
    role: "agency",
    company: "Viajes Inolvidables",
    location: "Ciudad de México, México",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Encontrar guías confiables y de calidad solía ser un desafío hasta que descubrimos TourMate. Ahora podemos ofrecer experiencias personalizadas a nuestros clientes con total tranquilidad."
  },
  {
    id: 3,
    name: "Sophie Dubois",
    role: "guide",
    location: "París, Francia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    comment: "La plataforma me ha ayudado a gestionar mejor mi tiempo y a establecer relaciones duraderas con agencias de todo el mundo. El sistema de calendario es muy útil."
  },
  {
    id: 4,
    name: "John Smith",
    role: "agency",
    company: "Adventure Tours",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    comment: "La calidad de los guías en la plataforma es excepcional. Hemos podido expandir nuestros tours a nuevos destinos gracias a la red de profesionales disponibles."
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} 
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 bg-tour-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tour-gray-dark mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-tour-gray max-w-2xl mx-auto">
            Historias reales de guías y agencias que han transformado su forma de trabajar con TourMate Connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-tour-gray-dark">{testimonial.name}</h4>
                    <p className="text-sm text-tour-gray">
                      {testimonial.role === "guide" ? "Guía turístico" : testimonial.company}
                    </p>
                    <p className="text-xs text-tour-gray">{testimonial.location}</p>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="mt-4 text-tour-gray-dark">
                  "{testimonial.comment}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
