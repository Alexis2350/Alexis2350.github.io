
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Ruta no encontrada:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tour-gray-light">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-tour-blue mb-4">404</h1>
        <p className="text-2xl text-tour-gray-dark mb-6">Página no encontrada</p>
        <p className="text-tour-gray mb-8">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <Link to="/">
          <Button className="bg-tour-blue hover:bg-tour-blue-dark text-white px-6">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
