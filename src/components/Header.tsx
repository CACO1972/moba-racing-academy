
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-racing-black/95 backdrop-blur-sm border-b border-racing-red/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-white">Racing Academy</h1>
              <p className="text-xs text-racing-gold">Conducción Deportiva</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cursos" className="text-white hover:text-racing-red transition-colors font-inter">Cursos</a>
            <a href="#niveles" className="text-white hover:text-racing-red transition-colors font-inter">Niveles</a>
            <a href="#recursos" className="text-white hover:text-racing-red transition-colors font-inter">Recursos</a>
            <a href="#progreso" className="text-white hover:text-racing-red transition-colors font-inter">Mi Progreso</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="racing-button">
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-racing-red/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#cursos" className="text-white hover:text-racing-red transition-colors font-inter">Cursos</a>
              <a href="#niveles" className="text-white hover:text-racing-red transition-colors font-inter">Niveles</a>
              <a href="#recursos" className="text-white hover:text-racing-red transition-colors font-inter">Recursos</a>
              <a href="#progreso" className="text-white hover:text-racing-red transition-colors font-inter">Mi Progreso</a>
              <Button className="racing-button mt-4 w-full">
                Comenzar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
