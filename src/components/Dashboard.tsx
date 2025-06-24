
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { BookOpen, Trophy, Target, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [activeSection, setActiveSection] = useState('cursos');
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-racing-black">
      {/* Header Dashboard */}
      <header className="bg-racing-black border-b border-racing-red/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-racing-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold text-white">Racing Academy</h1>
              <p className="text-sm text-racing-gold">Bienvenido, {user.email}</p>
            </div>
          </div>
          
          <Button 
            onClick={handleSignOut}
            variant="outline"
            className="border-racing-red/30 text-racing-red hover:bg-racing-red/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Salir
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="racing-card p-4 space-y-2">
              <button
                onClick={() => setActiveSection('cursos')}
                className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                  activeSection === 'cursos' 
                    ? 'bg-racing-red/20 text-racing-red border border-racing-red/30' 
                    : 'text-white hover:bg-racing-red/10'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-inter">Mis Cursos</span>
              </button>
              
              <button
                onClick={() => setActiveSection('progreso')}
                className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                  activeSection === 'progreso' 
                    ? 'bg-racing-red/20 text-racing-red border border-racing-red/30' 
                    : 'text-white hover:bg-racing-red/10'
                }`}
              >
                <Trophy className="w-5 h-5" />
                <span className="font-inter">Mi Progreso</span>
              </button>
              
              <button
                onClick={() => setActiveSection('ejercicios')}
                className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                  activeSection === 'ejercicios' 
                    ? 'bg-racing-red/20 text-racing-red border border-racing-red/30' 
                    : 'text-white hover:bg-racing-red/10'
                }`}
              >
                <Target className="w-5 h-5" />
                <span className="font-inter">Ejercicios</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'cursos' && <CoursesContent />}
            {activeSection === 'progreso' && <ProgressContent />}
            {activeSection === 'ejercicios' && <ExercisesContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componentes de contenido
const CoursesContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-orbitron font-bold text-white">Fundamentos del Karting</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="racing-card p-6">
        <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
          Lección 1: Posición y Ergonomía
        </h3>
        <p className="text-gray-300 mb-4 font-inter">
          Aprende la postura correcta para maximizar control y reducir fatiga.
        </p>
        <div className="flex justify-between items-center">
          <span className="level-badge level-amateur">Amateur</span>
          <Button className="racing-button">Comenzar</Button>
        </div>
      </div>
      
      <div className="racing-card p-6 opacity-50">
        <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
          Lección 2: Técnicas de Aceleración
        </h3>
        <p className="text-gray-300 mb-4 font-inter">
          Domina el control del acelerador para tracción óptima.
        </p>
        <div className="flex justify-between items-center">
          <span className="level-badge level-amateur">Amateur</span>
          <Button disabled className="racing-button">Bloqueado</Button>
        </div>
      </div>
    </div>
  </div>
);

const ProgressContent = () => (
  <div className="racing-card p-6">
    <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Mi Progreso</h2>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-white mb-2">
          <span className="font-inter">Fundamentos del Karting</span>
          <span className="font-orbitron">25%</span>
        </div>
        <div className="w-full bg-racing-black-light rounded-full h-3">
          <div className="bg-racing-gradient h-3 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const ExercisesContent = () => (
  <div className="racing-card p-6">
    <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Ejercicios Prácticos</h2>
    <p className="text-gray-300 font-inter">
      Los ejercicios se desbloquearán conforme completes las lecciones.
    </p>
  </div>
);

export default Dashboard;
