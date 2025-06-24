
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
    id: 'professional',
    title: 'Nivel Profesional',
    subtitle: 'Técnicas Intermedias y Avanzadas',
    icon: Star,
    color: 'text-racing-gold',
    bgColor: 'bg-racing-gold/10',
    borderColor: 'border-racing-gold/30',
    description: 'Para pilotos con experiencia que buscan perfeccionar su técnica y competir a nivel profesional.',
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
    price: '$99/mes'
  },
  {
    id: 'senior',
    title: 'Nivel Senior',
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
    price: '$199/mes'
  }
];

const LevelsSection = () => {
  return (
    <section id="niveles" className="py-20 bg-racing-black-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-racing-red/20 border border-racing-red/30 rounded-full mb-6">
            <Flame className="w-4 h-4 text-racing-red mr-2" />
            <span className="text-racing-red font-orbitron font-semibold text-sm">
              Niveles de Entrenamiento
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Elige tu Nivel de
            <span className="text-transparent bg-clip-text bg-racing-gradient"> Experiencia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Cada nivel está diseñado para llevarte desde donde estés hasta donde quieres llegar en el automovilismo deportivo.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card 
                key={level.id} 
                className={`racing-card relative overflow-hidden ${index === 1 ? 'scale-105 ring-2 ring-racing-gold/50' : ''}`}
              >
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-racing-gold text-racing-black px-3 py-1 rounded-full text-xs font-orbitron font-bold">
                    MÁS POPULAR
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-lg ${level.bgColor} border ${level.borderColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${level.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-orbitron font-bold text-white">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-inter text-lg">
                    {level.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 font-inter">
                    {level.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-orbitron font-semibold text-white text-lg">Temario incluido:</h4>
                    <ul className="space-y-2">
                      {level.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2 text-gray-300 font-inter">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-racing-red/20 pt-6 space-y-4">
                    <div className="flex justify-between text-sm font-inter">
                      <span className="text-gray-400">Duración:</span>
                      <span className="text-white">{level.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm font-inter">
                      <span className="text-gray-400">Ejercicios:</span>
                      <span className="text-white">{level.exercises}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm font-inter">Precio:</span>
                      <span className={`text-2xl font-orbitron font-bold ${level.color}`}>
                        {level.price}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${index === 1 ? 'racing-button' : 'bg-racing-black-light border border-racing-red/30 text-white hover:bg-racing-red/10'}`}
                  >
                    {level.price === 'Gratis' ? 'Comenzar Gratis' : 'Suscribirse'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 font-inter mb-6">
            ¿No estás seguro de tu nivel? Haz nuestro test de evaluación gratuito.
          </p>
          <Button variant="outline" className="border-racing-red/30 text-white hover:bg-racing-red/10 hover:border-racing-red">
            Evaluar mi Nivel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
