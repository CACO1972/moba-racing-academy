
import React, { memo, useCallback } from 'react';
import { Play, Clock, Trophy, Users, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoursePreviewCardProps {
  id: string;
  title: string;
  description: string;
  level: 'amateur' | 'semipro' | 'pro';
  duration: string;
  lessons: number;
  students: number;
  instructor: string;
  preview?: string;
  price: string;
  onSelect: (courseId: string) => void;
}

const CoursePreviewCard = memo(({
  id,
  title,
  description,
  level,
  duration,
  lessons,
  students,
  instructor,
  preview,
  price,
  onSelect
}: CoursePreviewCardProps) => {
  const levelStyles = {
    amateur: 'level-amateur',
    semipro: 'level-professional', 
    pro: 'level-senior'
  };

  const levelLabels = {
    amateur: 'Amateur',
    semipro: 'Semi-Pro',
    pro: 'Pro'
  };

  const handleSelect = useCallback(() => {
    onSelect(id);
  }, [id, onSelect]);

  const handlePlayClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(id);
  }, [id, onSelect]);

  return (
    <div className="racing-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer"
         onClick={handleSelect}>
      {/* Header con preview */}
      <div className="relative h-48 bg-gradient-to-br from-racing-black-light to-racing-black overflow-hidden">
        <div className="absolute inset-0 bg-speed-gradient opacity-10"></div>
        <div className="absolute top-4 left-4">
          <Badge className={`level-badge ${levelStyles[level]}`}>
            {levelLabels[level]}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-racing-red/80 text-white font-orbitron font-bold flex items-center space-x-1">
            <DollarSign className="h-3 w-3" />
            <span>{price}</span>
          </Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            className="w-16 h-16 rounded-full bg-racing-red/20 hover:bg-racing-red/30 text-racing-red hover:text-white transition-all duration-300 group-hover:scale-110"
            onClick={handlePlayClick}
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
          <h3 className="font-orbitron font-bold text-white text-lg mb-2 group-hover:text-racing-gold transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-racing-silver text-sm leading-relaxed line-clamp-3">
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
            <p className="text-xs text-white font-semibold">{students.toLocaleString()}</p>
            <p className="text-xs text-racing-silver">Estudiantes</p>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <Trophy className="h-4 w-4 text-racing-gold flex-shrink-0" />
            <span className="text-sm text-racing-silver truncate">Por {instructor}</span>
          </div>
          <Button
            onClick={handleSelect}
            className="racing-button px-4 py-2 text-sm group flex-shrink-0"
          >
            {price === 'Gratis' ? 'Gratis' : 'Comenzar'}
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
});

CoursePreviewCard.displayName = 'CoursePreviewCard';

export default CoursePreviewCard;
