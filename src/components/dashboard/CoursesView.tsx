
import React from 'react';
import { Play, Clock, Trophy, Star, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CoursesViewProps {
  onCourseSelect: (courseId: string) => void;
}

const CoursesView = ({ onCourseSelect }: CoursesViewProps) => {
  const courses = [
    {
      id: 'basic',
      title: 'Curso Básico de Conducción Deportiva',
      description: 'Fundamentos esenciales para iniciarse en la conducción deportiva',
      level: 'Amateur',
      duration: '4 horas',
      lessons: 8,
      progress: 25,
      price: 'Gratis',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      isPremium: false,
      rating: 4.8,
      students: 1247
    },
    {
      id: 'advanced',
      title: 'Técnicas Avanzadas de Pista',
      description: 'Perfecciona tu técnica con estrategias profesionales de circuito',
      level: 'Profesional',
      duration: '8 horas',
      lessons: 16,
      progress: 0,
      price: '$149',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      isPremium: true,
      rating: 4.9,
      students: 523
    },
    {
      id: 'racing',
      title: 'Preparación para Competición',
      description: 'Todo lo necesario para competir en eventos oficiales',
      level: 'Senior',
      duration: '12 horas',
      lessons: 24,
      progress: 0,
      price: '$299',
      image: 'https://images.unsplash.com/photo-1568605117036-cfb5e32e7882?w=400&h=250&fit=crop',
      isPremium: true,
      rating: 5.0,
      students: 189
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Amateur': return 'level-amateur';
      case 'Profesional': return 'level-professional';
      case 'Senior': return 'level-senior';
      default: return 'level-amateur';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-white mb-2">Cursos Disponibles</h1>
          <p className="text-racing-silver">Desarrolla tus habilidades de conducción deportiva</p>
        </div>
        <div className="racing-card p-4">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-racing-gold" />
            <span className="text-white font-semibold">Progreso Total: 8%</span>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="racing-card group hover:scale-105 transition-all duration-300 overflow-hidden">
            {/* Course Image */}
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              {course.isPremium && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-racing-gold/20 text-racing-gold border-racing-gold/30">
                    Premium
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-3 left-3">
                <Badge className={`level-badge ${getLevelColor(course.level)}`}>
                  {course.level}
                </Badge>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-6">
              <h3 className="font-orbitron font-bold text-white text-lg mb-2 group-hover:text-racing-red transition-colors">
                {course.title}
              </h3>
              <p className="text-racing-silver text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-racing-gold" />
                    <span className="text-racing-silver">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play className="h-4 w-4 text-racing-red" />
                    <span className="text-racing-silver">{course.lessons} lecciones</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-racing-gold fill-current" />
                  <span className="text-white font-semibold">{course.rating}</span>
                  <span className="text-racing-silver">({course.students})</span>
                </div>
              </div>

              {/* Progress Bar */}
              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-racing-silver">Progreso</span>
                    <span className="text-racing-gold font-semibold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-racing-black-light rounded-full h-2">
                    <div 
                      className="bg-racing-gradient h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <div className="text-lg font-orbitron font-bold">
                  {course.price === 'Gratis' ? (
                    <span className="text-green-500">{course.price}</span>
                  ) : (
                    <span className="text-racing-gold">{course.price}</span>
                  )}
                </div>
                <Button
                  onClick={() => onCourseSelect(course.id)}
                  className={`racing-button ${course.isPremium && course.progress === 0 ? 'opacity-75' : ''}`}
                  disabled={course.isPremium && course.progress === 0}
                >
                  {course.isPremium && course.progress === 0 ? (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Adquirir
                    </>
                  ) : course.progress > 0 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Continuar
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Comenzar
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="racing-card p-8 text-center bg-gradient-to-r from-racing-red/10 to-racing-gold/10 border-racing-red/30">
        <Trophy className="h-12 w-12 text-racing-gold mx-auto mb-4" />
        <h3 className="font-orbitron font-bold text-white text-xl mb-2">
          ¿Listo para el siguiente nivel?
        </h3>
        <p className="text-racing-silver mb-4">
          Accede a cursos premium y contenido exclusivo para acelerar tu aprendizaje
        </p>
        <Button className="racing-button">
          Ver Planes Premium
        </Button>
      </div>
    </div>
  );
};

export default CoursesView;
