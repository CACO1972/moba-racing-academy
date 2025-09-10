import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Trophy, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import racingTextureBg from '@/assets/racing-texture-bg.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleExploreCourses = () => {
    const element = document.getElementById('cursos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${racingTextureBg})` }}
      />
      <div className="absolute inset-0 bg-racing-darker/70" />
      <div className="gradient-overlay" />
      
      {/* Speed Lines Animation */}
      <div className="speed-lines absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 racing-badge badge-accent mb-8 animate-pulse-glow">
            Academy Profesional
          </div>

          {/* Main Title */}
          <h1 className="text-hero text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
            <span className="block text-racing-text">Domina</span>
            <span className="block text-gradient animate-text-glow">La Velocidad</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-racing-text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Desata tu potencial en la pista con técnicas avanzadas de conducción deportiva. 
            <span className="text-racing-accent font-bold"> Neon vibes, bold ideas,</span> y una actitud sin límites.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-3 text-racing-text">
              <div className="p-3 bg-racing-accent/20 rounded-lg border border-racing-accent/30">
                <Target className="w-6 h-6 text-racing-accent" />
              </div>
              <span className="font-orbitron font-semibold">Precisión Extrema</span>
            </div>
            <div className="flex items-center gap-3 text-racing-text">
              <div className="p-3 bg-racing-red/20 rounded-lg border border-racing-red/30">
                <Trophy className="w-6 h-6 text-racing-red" />
              </div>
              <span className="font-orbitron font-semibold">Rendimiento Pro</span>
            </div>
            <div className="flex items-center gap-3 text-racing-text">
              <div className="p-3 bg-racing-accent/20 rounded-lg border border-racing-accent/30">
                <Zap className="w-6 h-6 text-racing-accent" />
              </div>
              <span className="font-orbitron font-semibold">Velocidad Pura</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button 
              onClick={handleGetStarted}
              className="btn-primary text-lg h-16 px-12 group"
            >
              Comenzar mi Entrenamiento
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button 
              onClick={handleExploreCourses}
              variant="outline"
              className="btn-secondary text-lg h-16 px-12"
            >
              Explorar Cursos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-glow p-6 text-center">
              <div className="text-display text-4xl md:text-5xl text-gradient mb-2">50+</div>
              <div className="text-racing-text-muted font-orbitron text-sm uppercase tracking-wider">
                Técnicas Avanzadas
              </div>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-display text-4xl md:text-5xl text-red-gradient mb-2">200+</div>
              <div className="text-racing-text-muted font-orbitron text-sm uppercase tracking-wider">
                Ejercicios Prácticos
              </div>
            </div>
            <div className="card-glow p-6 text-center col-span-2 md:col-span-1">
              <div className="text-display text-4xl md:text-5xl text-gradient mb-2">15</div>
              <div className="text-racing-text-muted font-orbitron text-sm uppercase tracking-wider">
                Modalidades Deportivas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-racing-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-racing-red/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;