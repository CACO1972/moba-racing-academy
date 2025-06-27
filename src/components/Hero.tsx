
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
      coursesSection.scrollIntoView({ behavior: 'smooth' });
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
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-racing-red/20 border border-racing-red/30 rounded-full mb-8">
            <Zap className="w-4 h-4 text-racing-red mr-2" />
            <span className="text-racing-red font-orbitron font-semibold text-sm">
              Primera Academia Digital de Automovilismo
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 leading-tight">
            Domina la
            <span className="text-transparent bg-clip-text bg-racing-gradient"> Conducción </span>
            Deportiva
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
            Desde conceptos básicos de karting hasta técnicas avanzadas de Fórmula. 
            La única plataforma completa para pilotos amateur, profesional y senior.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-racing-gold">
              <Target className="w-5 h-5" />
              <span className="font-inter">Trail Braking & Técnicas Avanzadas</span>
            </div>
            <div className="flex items-center space-x-2 text-racing-gold">
              <Trophy className="w-5 h-5" />
              <span className="font-inter">3 Niveles de Experiencia</span>
            </div>
            <div className="flex items-center space-x-2 text-racing-gold">
              <Zap className="w-5 h-5" />
              <span className="font-inter">Ejercicios Prácticos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="racing-button text-lg px-8 py-4 group" onClick={handleGetStarted}>
              Comenzar mi Entrenamiento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-racing-red/30 text-white hover:bg-racing-red/10 hover:border-racing-red"
              onClick={handleExploreCourses}
            >
              Explorar Cursos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-racing-red/20">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-racing-red mb-2">50+</div>
              <div className="text-gray-400 font-inter">Técnicas Explicadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-racing-gold mb-2">100+</div>
              <div className="text-gray-400 font-inter">Ejercicios Prácticos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-white mb-2">3</div>
              <div className="text-gray-400 font-inter">Modalidades Deportivas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
