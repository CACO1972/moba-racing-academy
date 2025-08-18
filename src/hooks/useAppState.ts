
import { useState } from 'react';

export type ViewType = 'courses' | 'lesson' | 'profile' | 'progress';

export interface AppState {
  currentView: ViewType;
  selectedCourse: string | null;
  selectedLesson: string | null;
  sidebarOpen: boolean;
}

export const useAppState = () => {
  const [state, setState] = useState<AppState>({
    currentView: 'courses',
    selectedCourse: null,
    selectedLesson: null,
    sidebarOpen: true,
  });

  const setCurrentView = (view: ViewType) => {
    setState(prev => ({ ...prev, currentView: view }));
  };

  const setSelectedCourse = (courseId: string | null) => {
    setState(prev => ({ ...prev, selectedCourse: courseId }));
  };

  const setSelectedLesson = (lessonId: string | null) => {
    setState(prev => ({ ...prev, selectedLesson: lessonId }));
  };

  const toggleSidebar = () => {
    setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }));
  };

  return {
    ...state,
    setCurrentView,
    setSelectedCourse,
    setSelectedLesson,
    toggleSidebar,
  };
};
