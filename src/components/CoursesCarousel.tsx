import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Book, Play, Clock, Users, ChevronLeft, ChevronRight, Brain, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 'fundamentos',
    title: 'Fundamentos del Karting',
    description: 'Aprende los conceptos básicos de la conducción deportiva empezando por karting.',
    level: 'Amateur',
    levelColor: 'bg-racing-accent/20 text-racing-accent border-racing-accent/30',
    duration: '45 min',
    lessons: 8,
    students: 1250,
    price: 'Gratis',
    image: '/lovable-uploads/42689cf5-83f0-4d70-811a-6f00dd32498e.png',
    icon: Zap,
    accent: 'racing-accent'
  },
  {
    id: 'neurocognitive',
    title: 'Entrenamiento Neurocognitivo',
    description: 'Desarrolla tu potencial cerebral para la conducción deportiva con evaluación personalizada.',
    level: 'Especializado',
    levelColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    duration: '180 min',
    lessons: 20,
    students: 312,
    price: 'US$100',
    image: '/lovable-uploads/aa3548df-59db-4f99-8da6-1842524800af.png',
    icon: Brain,
    accent: 'purple-400'
  },
  {
    id: 'telemetry-ai',
    title: 'Telemetría con IA',
    description: 'Análisis inteligente de datos de telemetría con personalización asistida por IA.',
    level: 'Especializado',
    levelColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    duration: '180 min',
    lessons: 18,
    students: 156,
    price: 'US$150',
    image: '/lovable-uploads/78a1e3eb-5afd-4cd6-bda2-b63b0ea99fda.png',
    icon: Cpu,
    accent: 'cyan-400'
  },
  {
    id: 'trail-braking',
    title: 'Trail Braking Avanzado',
    description: 'Domina la técnica más importante del automovilismo moderno.',
    level: 'Semi-Pro',
    levelColor: 'bg-racing-red/20 text-racing-red border-racing-red/30',
    duration: '90 min',
    lessons: 12,
    students: 890,
    price: 'Semi-Pro',
    image: '/lovable-uploads/5157af46-9b4f-437b-a017-18787e59c49d.png',
    icon: Zap,
    accent: 'racing-red'
  },
  {
    id: 'telemetria',
    title: 'Análisis de Telemetría',
    description: 'Utiliza los datos para mejorar tu rendimiento en pista.',
    level: 'Pro',
    levelColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    duration: '120 min',
    lessons: 15,
    students: 420,
    price: 'Pro',
    image: '/lovable-uploads/78a1e3eb-5afd-4cd6-bda2-b63b0ea99fda.png',
    icon: Cpu,
    accent: 'orange-400'
  },
  {
    id: 'setup',
    title: 'Setup y Configuración',
    description: 'Optimiza la configuración de tu vehículo para cada circuito.',
    level: 'Semi-Pro',
    levelColor: 'bg-racing-red/20 text-racing-red border-racing-red/30',
    duration: '75 min',
    lessons: 10,
    students: 650,
    price: 'Semi-Pro',
    image: '/lovable-uploads/81131fbb-e1b3-4f4e-9249-bd1edc7d6b03.png',
    icon: Zap,
    accent: 'racing-red'
  }
];

const CoursesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="cursos" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-racing-darker via-racing-dark to-racing-darker" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-racing-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-racing-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="racing-badge badge-accent mb-6">
            <Book className="w-4 h-4 mr-2" />
            Cursos Disponibles
          </div>
          <h2 className="text-hero text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            CONTENIDO
            <span className="text-gradient block">ESPECIALIZADO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Cada curso incluye videos explicativos, infografías interactivas 
            y ejercicios prácticos diseñados por profesionales.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-racing-surface/80 backdrop-blur-sm border border-racing-border 
                         hover:bg-racing-accent hover:border-racing-accent hover:text-racing-dark
                         transition-all duration-300 shadow-dramatic"
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={scrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-racing-surface/80 backdrop-blur-sm border border-racing-border 
                         hover:bg-racing-accent hover:border-racing-accent hover:text-racing-dark
                         transition-all duration-300 shadow-dramatic"
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 md:mx-16" ref={emblaRef}>
            <div className="flex gap-6">
              {courses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <div
                    key={course.id}
                    className="flex-none w-[85%] sm:w-[45%] lg:w-[30%] min-w-0"
                  >
                    {/* Course Card */}
                    <div className="group relative h-full">
                      {/* Glow Effect on Hover */}
                      <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 blur-xl
                                      ${course.accent === 'racing-accent' ? 'bg-racing-accent/30' : 
                                        course.accent === 'purple-400' ? 'bg-purple-500/30' : 
                                        course.accent === 'cyan-400' ? 'bg-cyan-500/30' : 
                                        course.accent === 'orange-400' ? 'bg-orange-500/30' : 
                                        'bg-racing-red/30'}`} 
                      />
                      
                      <div className="relative bg-racing-surface/80 backdrop-blur-sm border border-racing-border rounded-2xl 
                                      overflow-hidden h-full
                                      group-hover:border-racing-accent/50 group-hover:transform group-hover:scale-[1.02] 
                                      group-hover:-translate-y-2 transition-all duration-500 ease-out">
                        
                        {/* Image Section */}
                        <div className="relative h-52 overflow-hidden">
                          <img 
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover transition-transform duration-700 
                                       group-hover:scale-110"
                          />
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-racing-surface via-racing-surface/50 to-transparent" />
                          
                          {/* Speed Lines Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-racing-accent/10 to-transparent 
                                            animate-speed-line" />
                          </div>
                          
                          {/* Level Badge */}
                          <Badge className={`absolute top-4 left-4 ${course.levelColor} font-orbitron font-bold text-xs`}>
                            {course.level}
                          </Badge>
                          
                          {/* Price Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-racing-dark/90 backdrop-blur-sm border border-racing-accent/30 
                                           px-3 py-1.5 rounded-full">
                              <span className="text-racing-accent font-orbitron font-bold text-sm">
                                {course.price}
                              </span>
                            </div>
                          </div>
                          
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-racing-dark/80 backdrop-blur-sm border-2 border-racing-accent/50
                                           flex items-center justify-center
                                           opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                                           transition-all duration-500 ease-out
                                           hover:bg-racing-accent hover:border-racing-accent cursor-pointer
                                           group/play">
                              <Play className="w-7 h-7 text-racing-accent group-hover/play:text-racing-dark 
                                              transition-colors duration-300 ml-1" />
                            </div>
                          </div>
                          
                          {/* Icon Indicator */}
                          <div className="absolute bottom-4 left-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                                           ${course.accent === 'racing-accent' ? 'bg-racing-accent/20' : 
                                             course.accent === 'purple-400' ? 'bg-purple-500/20' : 
                                             course.accent === 'cyan-400' ? 'bg-cyan-500/20' : 
                                             course.accent === 'orange-400' ? 'bg-orange-500/20' : 
                                             'bg-racing-red/20'}
                                           backdrop-blur-sm border border-racing-border/50`}>
                              <IconComponent className={`w-5 h-5 
                                ${course.accent === 'racing-accent' ? 'text-racing-accent' : 
                                  course.accent === 'purple-400' ? 'text-purple-400' : 
                                  course.accent === 'cyan-400' ? 'text-cyan-400' : 
                                  course.accent === 'orange-400' ? 'text-orange-400' : 
                                  'text-racing-red'}`} />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="text-display text-xl text-foreground mb-2 
                                          group-hover:text-racing-accent transition-colors duration-300">
                              {course.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 font-inter">
                              {course.description}
                            </p>
                          </div>
                          
                          {/* Stats */}
                          <div className="flex items-center justify-between pt-4 border-t border-racing-border/50">
                            <div className="flex items-center gap-4 text-muted-foreground text-xs">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Book className="w-3.5 h-3.5" />
                                <span>{course.lessons} lecciones</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                              <Users className="w-3.5 h-3.5" />
                              <span>{course.students.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          {/* CTA Button */}
                          <Button className={`w-full font-orbitron font-bold text-sm py-6
                                            ${course.accent === 'racing-accent' ? 'btn-primary' : 
                                              course.accent === 'purple-400' ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800' : 
                                              course.accent === 'cyan-400' ? 'bg-gradient-to-r from-cyan-500 to-cyan-700 text-white hover:from-cyan-600 hover:to-cyan-800' : 
                                              course.accent === 'orange-400' ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800' : 
                                              'btn-red'}
                                            transition-all duration-300`}>
                            {course.price === 'Gratis' ? 'Comenzar Gratis' : 'Acceder al Curso'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                         ${index === selectedIndex 
                           ? 'w-8 bg-racing-accent' 
                           : 'bg-racing-border hover:bg-racing-accent/50'}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-inter mb-6">
            ¿Buscas un curso específico? Explora nuestro catálogo completo.
          </p>
          <Button className="btn-secondary">
            Ver Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;
