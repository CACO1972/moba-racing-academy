
import React from 'react';
import { Play, Clock, Trophy, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoursePreviewCardProps {
  id: string;
  title: string;
  description: string;
  level: 'amateur' | 'professional' | 'senior' | 'pro';
  duration: string;
  lessons: number;
  students: number;
  instructor: string;
  preview?: string;
  onSelect: (courseId: string) => void;
}

const CoursePreviewCard = ({
  id,
  title,
  description,
  level,
  duration,
  lessons,
  students,
  instructor,
  preview,
  onSelect
}: CoursePreviewCardProps) => {
  const levelStyles = {
    amateur: 'level-amateur',
    professional: 'level-professional', 
    senior: 'level-senior',
    pro: 'level-pro'
  };

  const levelLabels = {
    amateur: 'Amateur',
    professional: 'Profesional',
    senior: 'Senior',
    pro: 'Pro'
  };

  return (
    <div className="racing-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      {/* Header con preview */}
      <div className="relative h-48 bg-gradient-to-br from-racing-black-light to-racing-black overflow-hidden">
        <div className="absolute inset-0 bg-speed-gradient opacity-10"></div>
        <div className="absolute top-4 left-4">
          <Badge className={`level-badge ${levelStyles[level]}`}>
            {levelLabels[level]}
          </Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            className="w-16 h-16 rounded-full bg-racing-red/20 hover:bg-racing-red/30 text-racing-red hover:text-white transition-all duration-300 group-hover:scale-110"
            onClick={() => onSelect(id)}
          >
            <Play className="h-8 w-8" />
          </Button>
        </div>
        {preview && (
          <div className="absolute bottom-4 right-4 text-xs text-racing-silver bg-racing-black/80 px-2 py-1 rounded">
            Vista previa disponible
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-orbitron font-bold text-white text-lg mb-2 group-hover:text-racing-gold transition-colors">
            {title}
          </h3>
          <p className="text-racing-silver text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-3 border-y border-racing-red/20">
          <div className="text-center">
            <Clock className="h-4 w-4 text-racing-gold mx-auto mb-1" />
            <p className="text-xs text-white font-semibold">{duration}</p>
            <p className="text-xs text-racing-silver">Duración</p>
          </div>
          <div className="text-center">
            <Play className="h-4 w-4 text-racing-red mx-auto mb-1" />
            <p className="text-xs text-white font-semibold">{lessons}</p>
            <p className="text-xs text-racing-silver">Lecciones</p>
          </div>
          <div className="text-center">
            <Users className="h-4 w-4 text-racing-silver mx-auto mb-1" />
            <p className="text-xs text-white font-semibold">{students}</p>
            <p className="text-xs text-racing-silver">Estudiantes</p>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-racing-gold" />
            <span className="text-sm text-racing-silver">Por {instructor}</span>
          </div>
          <Button
            onClick={() => onSelect(id)}
            className="racing-button px-4 py-2 text-sm group"
          >
            Comenzar
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewCard;
