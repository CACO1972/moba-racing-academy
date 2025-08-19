
import React, { memo, useCallback } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/hooks/useAppState';
import { useIsMobile } from '@/hooks/use-mobile';
import DashboardSidebar from './DashboardSidebar';
import CoursesView from './CoursesView';
import NavigationBreadcrumbs from '../NavigationBreadcrumbs';
import EngineAudioControls from '../EngineAudioControls';

interface NewDashboardProps {
  user: User;
}

const NewDashboard = memo(({ user }: NewDashboardProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const {
    currentView,
    selectedCourse,
    selectedLesson,
    sidebarOpen,
    setCurrentView,
    setSelectedCourse,
    toggleSidebar
  } = useAppState();

  const handleSignOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "No se pudo cerrar sesión",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleCourseSelect = useCallback((courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentView('lesson');
  }, [setSelectedCourse, setCurrentView]);

  const renderCurrentView = useCallback(() => {
    switch (currentView) {
      case 'courses':
        return <CoursesView onCourseSelect={handleCourseSelect} />;
      case 'progress':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-6 sm:p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-xl sm:text-2xl mb-4">
                Vista de Progreso
              </h2>
              <p className="text-racing-silver text-sm sm:text-base">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-6 sm:p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-xl sm:text-2xl mb-4">
                Vista de Perfil
              </h2>
              <p className="text-racing-silver text-sm sm:text-base">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      case 'lesson':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-6 sm:p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-xl sm:text-2xl mb-4">
                Vista de Lección
              </h2>
              <p className="text-racing-silver text-sm sm:text-base">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      default:
        return <CoursesView onCourseSelect={handleCourseSelect} />;
    }
  }, [currentView, handleCourseSelect]);

  return (
    <div className="min-h-screen bg-racing-black flex overflow-hidden">
      {/* Sidebar - Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`${isMobile ? 'fixed z-50' : 'relative'} ${!sidebarOpen && isMobile ? '-translate-x-full' : 'translate-x-0'} transition-transform duration-300`}>
        <DashboardSidebar
          user={user}
          currentView={currentView}
          onViewChange={setCurrentView}
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-racing-black-light border-b border-racing-red/20 p-3 sm:p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-6 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="text-racing-silver hover:text-white flex-shrink-0 p-2"
              >
                <Menu className="h-4 w-4" />
              </Button>
              
              <div className="min-w-0 flex-1">
                <NavigationBreadcrumbs
                  currentView={currentView}
                  selectedCourse={selectedCourse}
                  selectedLesson={selectedLesson}
                  onNavigate={setCurrentView}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              {/* Audio Controls para desktop */}
              {!isMobile && (
                <div className="hidden lg:block">
                  <EngineAudioControls />
                </div>
              )}
              
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="text-racing-silver hover:text-racing-red hover:bg-racing-black-light transition-all duration-300 p-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Salir</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderCurrentView()}
          </div>
        </main>

        {/* Audio Controls para mobile */}
        {isMobile && (
          <div className="border-t border-racing-red/20 p-3 flex-shrink-0">
            <EngineAudioControls />
          </div>
        )}
      </div>
    </div>
  );
});

NewDashboard.displayName = 'NewDashboard';

export default NewDashboard;
