
import React from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/hooks/useAppState';
import DashboardSidebar from './DashboardSidebar';
import CoursesView from './CoursesView';
import NavigationBreadcrumbs from '../NavigationBreadcrumbs';
import EngineAudioControls from '../EngineAudioControls';

interface NewDashboardProps {
  user: User;
}

const NewDashboard = ({ user }: NewDashboardProps) => {
  const { toast } = useToast();
  const {
    currentView,
    selectedCourse,
    selectedLesson,
    sidebarOpen,
    setCurrentView,
    setSelectedCourse,
    toggleSidebar
  } = useAppState();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "No se pudo cerrar sesión",
        variant: "destructive",
      });
    }
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentView('lesson');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'courses':
        return <CoursesView onCourseSelect={handleCourseSelect} />;
      case 'progress':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-2xl mb-4">
                Vista de Progreso
              </h2>
              <p className="text-racing-silver">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-2xl mb-4">
                Vista de Perfil
              </h2>
              <p className="text-racing-silver">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      case 'lesson':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="racing-card p-8 text-center">
              <h2 className="font-orbitron font-bold text-white text-2xl mb-4">
                Vista de Lección
              </h2>
              <p className="text-racing-silver">En desarrollo - Próximamente</p>
            </div>
          </div>
        );
      default:
        return <CoursesView onCourseSelect={handleCourseSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-racing-black flex">
      {/* Sidebar */}
      <DashboardSidebar
        user={user}
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-racing-black-light border-b border-racing-red/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="text-racing-silver hover:text-white md:hidden"
              >
                <Menu className="h-4 w-4" />
              </Button>
              
              <NavigationBreadcrumbs
                currentView={currentView}
                selectedCourse={selectedCourse}
                selectedLesson={selectedLesson}
                onNavigate={setCurrentView}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Audio Controls para desktop */}
              <div className="hidden lg:block">
                <EngineAudioControls />
              </div>
              
              <Button
                onClick={handleSignOut}
                variant="ghost"
                className="text-racing-silver hover:text-racing-red hover:bg-racing-black-light transition-all duration-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderCurrentView()}
          </div>
        </main>

        {/* Audio Controls para mobile */}
        <div className="lg:hidden border-t border-racing-red/20 p-4">
          <EngineAudioControls />
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
