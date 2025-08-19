
import { CheckCircle, Star, Crown, Flame } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const levels = [
  {
    id: 'amateur',
    title: 'Nivel Amateur',
    subtitle: 'Fundamentos del Automovilismo',
    icon: CheckCircle,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    description: 'Perfecto para principiantes que quieren aprender los conceptos básicos de la conducción deportiva.',
    topics: [
      'Posición de manejo y ergonomía',
      'Conceptos básicos de aceleración y frenado',
      'Introducción a los radios de curva',
      'Fundamentos del karting',
      'Línea de carrera básica',
      'Camber y configuración inicial'
    ],
    duration: '4-6 semanas',
    exercises: '25 ejercicios prácticos',
    price: 'Gratis'
  },
  {
    id: 'semipro',
    title: 'Nivel Semi-Pro',
    subtitle: 'Técnicas Intermedias y Avanzadas',
    icon: Star,
    color: 'text-racing-gold',
    bgColor: 'bg-racing-gold/10',
    borderColor: 'border-racing-gold/30',
    description: 'Para pilotos con experiencia que buscan perfeccionar su técnica y competir a nivel semi-profesional.',
    topics: [
      'Trail braking y técnicas de frenado avanzadas',
      'Gestión de neumáticos y adherencia',
      'Análisis de telemetría básica',
      'Técnicas de adelantamiento',
      'Optimización de trazadas',
      'Aero y aerodinámica práctica'
    ],
    duration: '8-10 semanas',
    exercises: '45 ejercicios prácticos',
    price: 'US$150'
  },
  {
    id: 'pro',
    title: 'Nivel Pro',
    subtitle: 'Maestría en Automovilismo',
    icon: Crown,
    color: 'text-racing-red',
    bgColor: 'bg-racing-red/10',
    borderColor: 'border-racing-red/30',
    description: 'El nivel más avanzado para pilotos profesionales y instructores que buscan la excelencia técnica.',
    topics: [
      'Técnicas de simulación avanzada',
      'Análisis profundo de telemetría',
      'Estrategias de carrera y combustible',
      'Técnicas específicas de Fórmula',
      'Coaching y mentoría de pilotos',
      'Desarrollo de setup personalizado'
    ],
    duration: '12-16 semanas',
    exercises: '70 ejercicios prácticos',
    price: 'US$200'
  }
];

const LevelsSection = () => {
  return (
    <section id="niveles" className="py-16 sm:py-20 bg-racing-black-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-racing-red/20 border border-racing-red/30 rounded-full mb-4 sm:mb-6">
            <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-racing-red mr-1 sm:mr-2" />
            <span className="text-racing-red font-orbitron font-semibold text-xs sm:text-sm">
              Niveles de Entrenamiento
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-white mb-4 sm:mb-6 px-4">
            Elige tu Nivel de
            <span className="text-transparent bg-clip-text bg-racing-gradient block sm:inline"> Experiencia</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-inter px-4">
            Cada nivel está diseñado para llevarte desde donde estés hasta donde quieres llegar en el automovilismo deportivo.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card 
                key={level.id} 
                className={`racing-card relative overflow-hidden ${index === 1 ? 'md:scale-105 ring-2 ring-racing-gold/50' : ''} hover:scale-[1.02] transition-all duration-300`}
              >
                {index === 1 && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-racing-gold text-racing-black px-2 py-1 sm:px-3 rounded-full text-xs font-orbitron font-bold">
                    MÁS POPULAR
                  </div>
                )}
                
                <CardHeader className="pb-4 p-4 sm:p-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg ${level.bgColor} border ${level.borderColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${level.color}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold text-white">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-inter text-sm sm:text-base lg:text-lg">
                    {level.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-gray-300 font-inter text-sm sm:text-base">
                    {level.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-orbitron font-semibold text-white text-base sm:text-lg">Temario incluido:</h4>
                    <ul className="space-y-2">
                      {level.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2 text-gray-300 font-inter">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-racing-red/20 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                    <div className="flex justify-between text-xs sm:text-sm font-inter">
                      <span className="text-gray-400">Duración:</span>
                      <span className="text-white">{level.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm font-inter">
                      <span className="text-gray-400">Ejercicios:</span>
                      <span className="text-white">{level.exercises}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm font-inter">Precio:</span>
                      <span className={`text-lg sm:text-xl lg:text-2xl font-orbitron font-bold ${level.color}`}>
                        {level.price}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full text-sm sm:text-base py-2 sm:py-3 ${index === 1 ? 'racing-button' : 'bg-racing-black-light border border-racing-red/30 text-white hover:bg-racing-red/10'}`}
                  >
                    {level.price === 'Gratis' ? 'Comenzar Gratis' : 'Suscribirse'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-gray-400 font-inter mb-4 sm:mb-6 text-sm sm:text-base">
            ¿No estás seguro de tu nivel? Haz nuestro test de evaluación gratuito.
          </p>
          <Button variant="outline" className="border-racing-red/30 text-white hover:bg-racing-red/10 hover:border-racing-red text-sm sm:text-base px-6 py-2 sm:py-3">
            Evaluar mi Nivel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
