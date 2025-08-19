
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const authSection = document.getElementById('auth-section');
    if (authSection) {
      authSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-racing-black/95 backdrop-blur-sm border-b border-racing-red/20">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-sm sm:text-lg">M</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-xl font-orbitron font-bold text-white truncate">Moba Racing Academy</h1>
                <p className="text-xs text-racing-gold hidden sm:block">   </p>
              </div>
            </div>
            
            {/* Logo for larger screens */}
            <div className="hidden lg:flex items-center space-x-2 pl-4 border-l border-racing-red/30">
              <img 
                src="/lovable-uploads/5e67185b-203b-4c7a-820c-2000a2aa613a.png" 
                alt="Racing Academy" 
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#cursos" className="text-white hover:text-racing-red transition-colors font-inter text-sm lg:text-base">Cursos</a>
            <a href="#niveles" className="text-white hover:text-racing-red transition-colors font-inter text-sm lg:text-base">Niveles</a>
            <a href="#recursos" className="text-white hover:text-racing-red transition-colors font-inter text-sm lg:text-base">Recursos</a>
          </nav>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button className="racing-button text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3" onClick={handleGetStarted}>
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-racing-red/10 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-racing-red/20 animate-fade-in">
            {/* Logo for Mobile Menu */}
            <div className="flex items-center justify-center space-x-2 py-4 border-b border-racing-red/20">
              <img 
                src="/lovable-uploads/5e67185b-203b-4c7a-820c-2000a2aa613a.png" 
                alt="Racing Academy" 
                className="h-6 w-auto object-contain"
              />
              <span className="text-xs text-gray-400 font-inter">Powered by</span>
            </div>
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#cursos" 
                className="text-white hover:text-racing-red transition-colors font-inter text-base py-2 px-4 hover:bg-racing-red/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </a>
              <a 
                href="#niveles" 
                className="text-white hover:text-racing-red transition-colors font-inter text-base py-2 px-4 hover:bg-racing-red/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Niveles
              </a>
              <a 
                href="#recursos" 
                className="text-white hover:text-racing-red transition-colors font-inter text-base py-2 px-4 hover:bg-racing-red/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <Button 
                className="racing-button mt-4 w-full text-base py-3" 
                onClick={() => {
                  handleGetStarted();
                  setIsMenuOpen(false);
                }}
              >
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
