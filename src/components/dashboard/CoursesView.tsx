
import React from 'react';
import { Trophy, Zap, Brain, BarChart3 } from 'lucide-react';
import CoursePreviewCard from '../CoursePreviewCard';

interface CoursesViewProps {
  onCourseSelect: (courseId: string) => void;
}

const CoursesView = ({ onCourseSelect }: CoursesViewProps) => {
  const courses = [
    {
      id: 'karting-basics',
      title: 'Fundamentos de Karting',
      description: 'Aprende las bases del karting: técnicas de frenado, trazadas óptimas y posición corporal. Ideal para principiantes que quieren dominar los fundamentos.',
      level: 'amateur' as const,
      duration: '4 semanas',
      lessons: 12,
      students: 1240,
      instructor: 'G. Bacigalupo',
      preview: 'available'
    },
    {
      id: 'circuit-mastery',
      title: 'Dominio de Circuito',
      description: 'Técnicas avanzadas para diferentes tipos de circuitos: callejeros, permanentes y mixtos. Aprende a adaptar tu estilo según las condiciones.',
      level: 'professional' as const,
      duration: '6 semanas',
      lessons: 18,
      students: 890,
      instructor: 'G. Bacigalupo',
      preview: 'available'
    },
    {
      id: 'advanced-racing',
      title: 'Técnicas de Racing Avanzado',
      description: 'Estrategias de carrera, manejo bajo presión y técnicas de adelantamiento. Para pilotos que buscan el siguiente nivel competitivo.',
      level: 'senior' as const,
      duration: '8 semanas',
      lessons: 24,
      students: 567,
      instructor: 'G. Bacigalupo',
      preview: 'available'
    },
    {
      id: 'neurocognitive',
      title: 'Entrenamiento Neurocognitivo',
      description: 'Programa personalizado con evaluación previa para mejorar coordinación ojo-mano, memoria muscular, velocidad de reacción y concentración bajo presión.',
      level: 'pro' as const,
      duration: '12 semanas',
      lessons: 36,
      students: 234,
      instructor: 'Dr. Performance Team',
      preview: 'evaluation'
    },
    {
      id: 'telemetry-ai',
      title: 'Telemetría Profesional con IA',
      description: 'Análisis avanzado de datos con inteligencia artificial. Personalización asistida para optimizar tu rendimiento y ganar esas décimas cruciales.',
      level: 'pro' as const,
      duration: '10 semanas',
      lessons: 30,
      students: 156,
      instructor: 'AI Performance Lab',
      preview: 'demo'
    }
  ];

  const featuredCourse = courses[0];
  const otherCourses = courses.slice(1);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="racing-card p-8 bg-gradient-to-r from-racing-black-light via-racing-black to-racing-black-light relative overflow-hidden">
        <div className="absolute inset-0 bg-speed-gradient opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-8 w-8 text-racing-gold" />
            <h1 className="font-orbitron font-bold text-white text-3xl">
              Cursos Racing Academy
            </h1>
          </div>
          <p className="text-racing-silver text-lg mb-6 max-w-3xl">
            Domina el arte del automovilismo deportivo con nuestros cursos diseñados por profesionales. 
            Desde karting básico hasta técnicas de Fórmula 1.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-racing-gold">
              <Zap className="h-5 w-5" />
              <span className="font-inter">Contenido actualizado semanalmente</span>
            </div>
            <div className="flex items-center space-x-2 text-racing-gold">
              <Brain className="h-5 w-5" />
              <span className="font-inter">Técnicas neurocognitivas</span>
            </div>
            <div className="flex items-center space-x-2 text-racing-gold">
              <BarChart3 className="h-5 w-5" />
              <span className="font-inter">Análisis con IA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curso Destacado */}
      <div className="space-y-4">
        <h2 className="font-orbitron font-bold text-white text-2xl">Curso Recomendado</h2>
        <div className="max-w-2xl">
          <CoursePreviewCard
            {...featuredCourse}
            onSelect={onCourseSelect}
          />
        </div>
      </div>

      {/* Otros Cursos */}
      <div className="space-y-6">
        <h2 className="font-orbitron font-bold text-white text-2xl">Todos los Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherCourses.map((course) => (
            <CoursePreviewCard
              key={course.id}
              {...course}
              onSelect={onCourseSelect}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="racing-card p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-orbitron font-bold text-racing-red mb-2">2500+</div>
            <div className="text-racing-silver text-sm">Estudiantes Activos</div>
          </div>
          <div>
            <div className="text-3xl font-orbitron font-bold text-racing-gold mb-2">120</div>
            <div className="text-racing-silver text-sm">Lecciones Totales</div>
          </div>
          <div>
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">98%</div>
            <div className="text-racing-silver text-sm">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl font-orbitron font-bold text-white mb-2">5</div>
            <div className="text-racing-silver text-sm">Cursos Especializados</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
