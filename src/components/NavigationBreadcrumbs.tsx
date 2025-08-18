
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ViewType } from '@/hooks/useAppState';

interface NavigationBreadcrumbsProps {
  currentView: ViewType;
  selectedCourse?: string | null;
  selectedLesson?: string | null;
  onNavigate: (view: ViewType) => void;
}

const NavigationBreadcrumbs = ({ 
  currentView, 
  selectedCourse, 
  selectedLesson, 
  onNavigate 
}: NavigationBreadcrumbsProps) => {
  const viewLabels = {
    courses: 'Cursos',
    lesson: 'Lección',
    progress: 'Progreso',
    profile: 'Perfil'
  };

  const courseLabels: Record<string, string> = {
    'karting-basics': 'Karting Básico',
    'circuit-mastery': 'Dominio de Circuito',
    'advanced-racing': 'Técnicas Avanzadas',
    'neurocognitive': 'Entrenamiento Neurocognitivo',
    'telemetry-ai': 'Telemetría con IA'
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => onNavigate('courses')}
        className="flex items-center text-racing-silver hover:text-white transition-colors"
      >
        <Home className="h-4 w-4" />
      </button>

      <ChevronRight className="h-4 w-4 text-racing-silver/50" />

      <button
        onClick={() => onNavigate('courses')}
        className={`transition-colors ${
          currentView === 'courses' 
            ? 'text-white font-semibold' 
            : 'text-racing-silver hover:text-white'
        }`}
      >
        {viewLabels[currentView]}
      </button>

      {selectedCourse && currentView === 'lesson' && (
        <>
          <ChevronRight className="h-4 w-4 text-racing-silver/50" />
          <span className="text-racing-gold font-medium">
            {courseLabels[selectedCourse] || selectedCourse}
          </span>
        </>
      )}

      {selectedLesson && (
        <>
          <ChevronRight className="h-4 w-4 text-racing-silver/50" />
          <span className="text-racing-red font-medium">
            Lección {selectedLesson}
          </span>
        </>
      )}
    </nav>
  );
};

export default NavigationBreadcrumbs;
