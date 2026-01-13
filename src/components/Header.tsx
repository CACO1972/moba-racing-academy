import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-dramatic border-b border-racing-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-black font-orbitron font-black text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-display text-xl text-racing-text">Racing</span>
              <span className="text-display text-xl text-gradient ml-1">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cursos" className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors">
              Cursos
            </a>
            <a href="#niveles" className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors">
              Niveles
            </a>
            <a href="#recursos" className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors">
              Recursos
            </a>
            <Link to="/dashboard" className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={() => navigate('/dashboard')} className="btn-primary">
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-racing-surface border border-racing-border text-racing-text hover:text-racing-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-racing-border/50 backdrop-dramatic">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#cursos" 
                className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </a>
              <a 
                href="#niveles" 
                className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Niveles
              </a>
              <a 
                href="#recursos" 
                className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <Link 
                to="/dashboard" 
                className="text-racing-text hover:text-racing-accent font-orbitron font-medium transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Button 
                onClick={() => {
                  navigate('/dashboard');
                  setIsMenuOpen(false);
                }} 
                className="btn-primary mt-4"
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
