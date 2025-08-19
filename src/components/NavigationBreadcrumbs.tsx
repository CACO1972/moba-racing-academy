
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ViewType } from '@/hooks/useAppState';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
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
    <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm min-w-0">
      <button
        onClick={() => onNavigate('courses')}
        className="flex items-center text-racing-silver hover:text-white transition-colors flex-shrink-0"
      >
        <Home className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>

      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-racing-silver/50 flex-shrink-0" />

      <button
        onClick={() => onNavigate('courses')}
        className={`transition-colors truncate ${
          currentView === 'courses' 
            ? 'text-white font-semibold' 
            : 'text-racing-silver hover:text-white'
        }`}
      >
        {viewLabels[currentView]}
      </button>

      {selectedCourse && currentView === 'lesson' && (
        <>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-racing-silver/50 flex-shrink-0" />
          <span className="text-racing-gold font-medium truncate text-xs sm:text-sm">
            {isMobile 
              ? (courseLabels[selectedCourse]?.split(' ')[0] || selectedCourse)
              : (courseLabels[selectedCourse] || selectedCourse)
            }
          </span>
        </>
      )}

      {selectedLesson && (
        <>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-racing-silver/50 flex-shrink-0" />
          <span className="text-racing-red font-medium truncate text-xs sm:text-sm">
            {isMobile ? `L${selectedLesson}` : `Lección ${selectedLesson}`}
          </span>
        </>
      )}
    </nav>
  );
};

export default NavigationBreadcrumbs;
