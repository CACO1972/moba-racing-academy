import React from 'react';
import { Trophy, Zap, Brain, BarChart3, Loader2 } from 'lucide-react';
import CoursePreviewCard from '../CoursePreviewCard';
import { useCourses, useLessons } from '@/hooks/useCourses';

interface CoursesViewProps {
  onCourseSelect: (courseId: string) => void;
}

// Map database levels to UI levels and pricing
const levelMapping: Record<string, { uiLevel: 'amateur' | 'semipro' | 'pro'; price: string; duration: string }> = {
  amateur: { uiLevel: 'amateur', price: 'Gratis', duration: '4 semanas' },
  semipro: { uiLevel: 'semipro', price: 'US$150', duration: '6 semanas' },
  professional: { uiLevel: 'pro', price: 'US$200', duration: '8 semanas' },
  expert: { uiLevel: 'pro', price: 'US$250', duration: '10 semanas' },
};

const CoursesView = ({ onCourseSelect }: CoursesViewProps) => {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 text-racing-red animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-racing-red py-8">
        Error al cargar los cursos. Por favor intenta de nuevo.
      </div>
    );
  }

  const mappedCourses = (courses || []).map((course) => {
    const mapping = levelMapping[course.level] || levelMapping.amateur;
    return {
      id: course.id,
      title: course.title,
      description: course.description || '',
      level: mapping.uiLevel,
      duration: mapping.duration,
      lessons: 0, // Will be updated when we fetch lessons count
      students: Math.floor(Math.random() * 1000) + 200, // Placeholder
      instructor: 'G. Bacigalupo',
      preview: 'available' as const,
      price: mapping.price,
    };
  });

  const featuredCourse = mappedCourses[0];
  const otherCourses = mappedCourses.slice(1);

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
