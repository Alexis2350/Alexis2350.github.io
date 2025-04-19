
import { Button } from "@/components/ui/button";
import { Guide } from "@/types";
import { Star, MapPin, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface GuideCardProps {
  guide: Guide;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={guide.profileImage || "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=300&h=200"} 
          alt={`${guide.name} - Guía turístico`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center space-x-1 text-white">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="font-medium">{guide.rating.toFixed(1)}</span>
            <span className="text-xs">({guide.reviews.length} opiniones)</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-tour-gray-dark truncate">{guide.name}</h3>
        </div>
        
        <div className="flex items-center text-tour-gray text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{guide.location}</span>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-tour-gray-dark line-clamp-2">{guide.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {guide.languages.slice(0, 3).map((language, index) => (
            <span key={index} className="text-xs bg-tour-gray-light text-tour-gray-dark px-2 py-1 rounded-full">
              {language}
            </span>
          ))}
          {guide.languages.length > 3 && (
            <span className="text-xs bg-tour-gray-light text-tour-gray-dark px-2 py-1 rounded-full">
              +{guide.languages.length - 3}
            </span>
          )}
        </div>

        <div className="border-t pt-3 mt-3">
          <div className="grid grid-cols-2 gap-2">
            <Link to={`/guides/${guide.id}`}>
              <Button variant="outline" className="w-full border-tour-blue text-tour-blue hover:bg-tour-blue hover:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Ver disponibilidad
              </Button>
            </Link>
            <Link to={`/messages/new?guideId=${guide.id}`}>
              <Button className="w-full bg-tour-blue hover:bg-tour-blue-dark text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
