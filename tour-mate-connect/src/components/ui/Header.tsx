
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: UserRole;
  userName?: string;
}

export function Header({ isLoggedIn = false, userRole, userName }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-tour-blue">Tour<span className="text-tour-green">Mate</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/guides" className="text-tour-gray-dark hover:text-tour-blue transition">Guías</Link>
          <Link to="/how-it-works" className="text-tour-gray-dark hover:text-tour-blue transition">Cómo funciona</Link>
          {!isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" className="border-tour-blue text-tour-blue hover:bg-tour-blue hover:text-white">
                  Iniciar sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-tour-blue hover:bg-tour-blue-dark text-white">
                  Registrarse
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              {userRole === 'guide' && (
                <Link to="/guide/dashboard" className="text-tour-gray-dark hover:text-tour-blue transition">
                  Mi Panel
                </Link>
              )}
              {userRole === 'agency' && (
                <Link to="/agency/dashboard" className="text-tour-gray-dark hover:text-tour-blue transition">
                  Mi Panel
                </Link>
              )}
              <Link to="/messages" className="text-tour-gray-dark hover:text-tour-blue transition">
                Mensajes
              </Link>
              <Link to="/profile">
                <Button variant="ghost" className="text-tour-blue hover:text-tour-blue-dark hover:bg-tour-gray-light">
                  {userName || 'Mi Perfil'}
                </Button>
              </Link>
            </div>
          )}
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-tour-gray-dark p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/guides" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
              Guías
            </Link>
            <Link to="/how-it-works" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
              Cómo funciona
            </Link>
            {!isLoggedIn ? (
              <div className="flex flex-col space-y-3 pt-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-tour-blue text-tour-blue hover:bg-tour-blue hover:text-white">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-tour-blue hover:bg-tour-blue-dark text-white">
                    Registrarse
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                {userRole === 'guide' && (
                  <Link to="/guide/dashboard" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
                    Mi Panel
                  </Link>
                )}
                {userRole === 'agency' && (
                  <Link to="/agency/dashboard" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
                    Mi Panel
                  </Link>
                )}
                <Link to="/messages" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
                  Mensajes
                </Link>
                <Link to="/profile" className="text-tour-gray-dark hover:text-tour-blue transition py-2">
                  {userName || 'Mi Perfil'}
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
