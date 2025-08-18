
import React from 'react';
import { User } from '@supabase/supabase-js';
import { 
  BookOpen, 
  Trophy, 
  User as UserIcon, 
  BarChart3, 
  ChevronLeft,
  Play,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ViewType } from '@/hooks/useAppState';

interface DashboardSidebarProps {
  user: User;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ user, currentView, onViewChange, isOpen, onToggle }: DashboardSidebarProps) => {
  const menuItems = [
    { id: 'courses' as ViewType, label: 'Cursos', icon: BookOpen, color: 'text-racing-red' },
    { id: 'progress' as ViewType, label: 'Progreso', icon: BarChart3, color: 'text-racing-gold' },
    { id: 'profile' as ViewType, label: 'Perfil', icon: UserIcon, color: 'text-racing-silver' },
  ];

  return (
    <div className={`racing-card h-full transition-all duration-300 ${isOpen ? 'w-80' : 'w-16'} flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-racing-red/20">
        <div className="flex items-center justify-between">
          {isOpen && (
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/aa3548df-59db-4f99-8da6-1842524800af.png" 
                alt="Moba" 
                className="h-8 w-auto"
              />
              <div>
                <h2 className="font-orbitron font-bold text-white text-sm">Racing Academy</h2>
                <p className="text-xs text-racing-gold">Dashboard</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-racing-silver hover:text-white hover:bg-racing-black-light"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${!isOpen && 'rotate-180'}`} />
          </Button>
        </div>
      </div>

      {/* User Info */}
      {isOpen && (
        <div className="p-4 border-b border-racing-red/20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-racing-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-orbitron font-bold">
                {user.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{user.email}</p>
              <div className="flex items-center space-x-1">
                <Trophy className="h-3 w-3 text-racing-gold" />
                <span className="text-xs text-racing-gold">Nivel Amateur</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-racing-black-light group ${
                  isActive ? 'bg-racing-red/20 text-racing-red' : 'text-racing-silver hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-racing-red' : item.color} group-hover:scale-110 transition-transform`} />
                {isOpen && (
                  <span className="font-inter font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Quick Stats */}
      {isOpen && (
        <div className="p-4 border-t border-racing-red/20">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="racing-card p-2">
              <Play className="h-4 w-4 text-racing-red mx-auto mb-1" />
              <p className="text-xs text-white font-bold">5</p>
              <p className="text-xs text-racing-silver">Lecciones</p>
            </div>
            <div className="racing-card p-2">
              <CheckCircle className="h-4 w-4 text-green-500 mx-auto mb-1" />
              <p className="text-xs text-white font-bold">2</p>
              <p className="text-xs text-racing-silver">Completadas</p>
            </div>
            <div className="racing-card p-2">
              <Clock className="h-4 w-4 text-racing-gold mx-auto mb-1" />
              <p className="text-xs text-white font-bold">3h</p>
              <p className="text-xs text-racing-silver">Tiempo</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
