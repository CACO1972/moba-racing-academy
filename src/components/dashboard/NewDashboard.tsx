
import React from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/hooks/useAppState';
import DashboardSidebar from './DashboardSidebar';
import CoursesView from './CoursesView';

interface NewDashboardProps {
  user: User;
}

const NewDashboard = ({ user }: NewDashboardProps) => {
  const { toast } = useToast();
  const {
    currentView,
    selectedCourse,
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
        return <div className="text-white">Vista de Progreso - En desarrollo</div>;
      case 'profile':
        return <div className="text-white">Vista de Perfil - En desarrollo</div>;
      case 'lesson':
        return <div className="text-white">Vista de Lección - En desarrollo</div>;
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
            <div className="flex items-center space-x-4">
              <h1 className="font-orbitron font-bold text-white text-xl">
                {currentView === 'courses' && 'Cursos'}
                {currentView === 'progress' && 'Progreso'}
                {currentView === 'profile' && 'Perfil'}
                {currentView === 'lesson' && 'Lección'}
              </h1>
            </div>
            <Button
              onClick={handleSignOut}
              variant="ghost"
              className="text-racing-silver hover:text-racing-red hover:bg-racing-black-light"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
};

export default NewDashboard;
