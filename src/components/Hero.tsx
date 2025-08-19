
import { ArrowRight, Zap, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleExploreCourses = () => {
    const coursesSection = document.getElementById('cursos');
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-racing-black via-racing-black-light to-racing-black">
        <div className="absolute inset-0 opacity-20">
          <div className="speed-lines h-full w-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-racing-red/20 border border-racing-red/30 rounded-full mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-racing-red mr-1 sm:mr-2" />
            <span className="text-racing-red font-orbitron font-semibold text-xs sm:text-sm">
              Primera Academia Digital de Automovilismo
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold text-white mb-4 sm:mb-6 leading-tight">
            Domina la
            <span className="text-transparent bg-clip-text bg-racing-gradient block sm:inline"> Conducción </span>
            Deportiva
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto font-inter leading-relaxed px-4">
            Desde conceptos básicos de karting hasta técnicas avanzadas de Fórmula. 
            La única plataforma completa para pilotos amateur, profesional y senior.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 text-racing-gold">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-inter text-sm sm:text-base">Dirigida por G. Bacigalupo</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-racing-gold">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-inter text-sm sm:text-base">3 Niveles de Experiencia</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-racing-gold">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-inter text-sm sm:text-base">Ejercicios Prácticos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              className="racing-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto" 
              onClick={handleGetStarted}
            >
              Comenzar mi Entrenamiento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-racing-red/30 text-white hover:bg-racing-red/10 hover:border-racing-red w-full sm:w-auto" 
              onClick={handleExploreCourses}
            >
              Explorar Cursos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-racing-red/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold text-racing-red mb-2">50+</div>
              <div className="text-gray-400 font-inter text-sm sm:text-base">Técnicas Explicadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold text-racing-gold mb-2">100+</div>
              <div className="text-gray-400 font-inter text-sm sm:text-base">Ejercicios Prácticos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-2">3</div>
              <div className="text-gray-400 font-inter text-sm sm:text-base">Modalidades Deportivas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
