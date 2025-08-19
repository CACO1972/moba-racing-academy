import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    // Scroll to the auth section instead of navigating to a different page
    const authSection = document.getElementById('auth-section');
    if (authSection) {
      authSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // If no auth section exists, navigate to /auth
      navigate('/auth');
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-racing-black/95 backdrop-blur-sm border-b border-racing-red/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-orbitron font-bold text-white">Moba Racing Academy</h1>
                <p className="text-xs text-racing-gold">   </p>
              </div>
            </div>
            {/* Moba Racing Academy Logo */}
            <div className="hidden md:flex items-center space-x-2 pl-4 border-l border-racing-red/30">
              
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cursos" className="text-white hover:text-racing-red transition-colors font-inter">Cursos</a>
            <a href="#niveles" className="text-white hover:text-racing-red transition-colors font-inter">Niveles</a>
            <a href="#recursos" className="text-white hover:text-racing-red transition-colors font-inter">Recursos</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="racing-button" onClick={handleGetStarted}>
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-racing-red/20">
            {/* Moba Racing Academy Logo for Mobile */}
            <div className="flex items-center justify-center space-x-2 py-4 border-b border-racing-red/20">
              <img src="/lovable-uploads/ac324965-b728-49ac-a8ea-0ee99bdd137f.png" alt="Moba Racing Academy" className="h-6 w-auto" />
              <span className="text-xs text-gray-400 font-inter">Powered by</span>
            </div>
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#cursos" className="text-white hover:text-racing-red transition-colors font-inter">Cursos</a>
              <a href="#niveles" className="text-white hover:text-racing-red transition-colors font-inter">Niveles</a>
              <a href="#recursos" className="text-white hover:text-racing-red transition-colors font-inter">Recursos</a>
              <Button className="racing-button mt-4 w-full" onClick={handleGetStarted}>
                Comenzar Ahora
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;