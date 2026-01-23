import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Maximize,
  CheckCircle,
  Clock,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLesson, useLessons, useCourse } from '@/hooks/useCourses';
import { Skeleton } from '@/components/ui/skeleton';

interface LessonViewerProps {
  lessonId?: string;
  courseId?: string;
  onBack?: () => void;
  onLessonChange?: (lessonId: string) => void;
  onComplete?: () => void;
}

const LessonViewer = ({ lessonId, courseId, onBack, onLessonChange, onComplete }: LessonViewerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [activeTab, setActiveTab] = useState<'content' | 'notes' | 'resources'>('content');

  // Fetch lesson data from Supabase
  const { data: lesson, isLoading: lessonLoading } = useLesson(lessonId || '');
  const { data: course, isLoading: courseLoading } = useCourse(courseId || '');
  const { data: lessons, isLoading: lessonsLoading } = useLessons(courseId || '');

  const currentLessonIndex = lessons?.findIndex(l => l.id === lessonId) ?? -1;
  const previousLesson = currentLessonIndex > 0 ? lessons?.[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < (lessons?.length ?? 0) - 1 ? lessons?.[currentLessonIndex + 1] : null;

  const handlePrevious = () => {
    if (previousLesson && onLessonChange) {
      onLessonChange(previousLesson.id);
    }
  };

  const handleNext = () => {
    if (nextLesson && onLessonChange) {
      onLessonChange(nextLesson.id);
    }
  };

  const tabs = [
    { id: 'content', label: 'Contenido', icon: BookOpen },
    { id: 'notes', label: 'Notas', icon: BookOpen },
    { id: 'resources', label: 'Recursos', icon: BookOpen }
  ];

  const isLoading = lessonLoading || courseLoading || lessonsLoading;

  if (isLoading) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-20" />
            <div>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-8 w-64" />
            </div>
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="aspect-video w-full rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="racing-card p-8 text-center">
          <h2 className="font-orbitron font-bold text-white text-xl mb-4">
            Lección no encontrada
          </h2>
          <p className="text-racing-silver mb-6">
            Selecciona una lección del curso para comenzar.
          </p>
          <Button onClick={onBack} className="btn-primary">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Volver a cursos
          </Button>
        </div>
      </div>
    );
  }

  // Mock resources - in a real app these would come from the database
  const resources = [
    { name: 'Guía de la Lección PDF', type: 'pdf' },
    { name: 'Video Complementario', type: 'video' },
    { name: 'Ejercicios Prácticos', type: 'doc' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-racing-silver hover:text-white"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver
          </Button>
          <div>
            <p className="text-racing-accent text-sm font-medium">{course?.title || 'Curso'}</p>
            <h1 className="text-xl sm:text-2xl font-orbitron font-bold text-white">
              {lesson.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-racing-silver" />
          <span className="text-racing-silver text-sm">15:00</span>
        </div>
      </div>

      {/* Video Player Section */}
      <div className="racing-card overflow-hidden">
        {/* Video Container */}
        <div className="relative aspect-video bg-racing-black">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Lesson video thumbnail"
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-racing-accent/90 hover:bg-racing-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-glow"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-black" />
              ) : (
                <Play className="h-8 w-8 text-black ml-1" />
              )}
            </button>
          </div>

          {/* Video Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <Progress value={progress} className="h-1 bg-racing-surface" />
            
            {/* Video Controls */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-racing-accent p-2"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-racing-accent p-2"
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-racing-accent p-2"
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-racing-accent p-2"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <span className="text-white text-sm ml-2">5:25 / 15:00</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-racing-accent p-2"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="racing-card p-1 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-2 px-4 rounded-lg font-orbitron text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-racing-accent text-black'
                    : 'text-racing-silver hover:text-white hover:bg-racing-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="racing-card p-6">
            {activeTab === 'content' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-racing-silver leading-relaxed mb-6">
                  {lesson.description}
                </p>
                <div className="text-racing-text whitespace-pre-wrap font-inter leading-relaxed">
                  {lesson.content?.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-xl font-orbitron font-bold text-white mt-6 mb-4">{line.replace('## ', '')}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-lg font-orbitron font-semibold text-racing-accent mt-4 mb-2">{line.replace('### ', '')}</h3>;
                    }
                    if (line.startsWith('- **')) {
                      const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                      if (match) {
                        return (
                          <div key={i} className="flex gap-2 mb-2">
                            <span className="text-racing-accent">•</span>
                            <span><strong className="text-white">{match[1]}</strong>: {match[2]}</span>
                          </div>
                        );
                      }
                    }
                    if (line.startsWith('- ')) {
                      return (
                        <div key={i} className="flex gap-2 mb-2">
                          <span className="text-racing-accent">•</span>
                          <span>{line.replace('- ', '')}</span>
                        </div>
                      );
                    }
                    if (line.match(/^\d+\. /)) {
                      return (
                        <div key={i} className="flex gap-2 mb-2">
                          <span className="text-racing-accent font-bold">{line.match(/^\d+/)?.[0]}.</span>
                          <span>{line.replace(/^\d+\. /, '')}</span>
                        </div>
                      );
                    }
                    if (line.trim()) {
                      return <p key={i} className="mb-3">{line}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div>
                <h3 className="font-orbitron font-bold text-white mb-4">Mis Notas</h3>
                <textarea
                  placeholder="Escribe tus notas aquí..."
                  className="w-full h-48 bg-racing-surface border border-racing-border rounded-lg p-4 text-racing-text placeholder:text-racing-silver/50 focus:border-racing-accent focus:outline-none resize-none"
                />
                <Button className="btn-primary mt-4">
                  Guardar Notas
                </Button>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-4">
                <h3 className="font-orbitron font-bold text-white mb-4">Recursos de la Lección</h3>
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-racing-surface rounded-lg border border-racing-border hover:border-racing-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-racing-accent/20 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-racing-accent" />
                      </div>
                      <span className="text-white font-medium">{resource.name}</span>
                    </div>
                    <span className="text-racing-silver text-sm uppercase">{resource.type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <div className="racing-card p-6">
            <h3 className="font-orbitron font-bold text-white mb-4">Tu Progreso</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-racing-silver">Lección actual</span>
                  <span className="text-racing-accent">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div className="flex items-center gap-2 text-racing-silver text-sm">
                <Clock className="h-4 w-4" />
                <span>Tiempo restante: 10:05</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="racing-card p-6 space-y-4">
            <Button
              onClick={onComplete}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Marcar como Completada
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={!previousLesson}
                className="flex-1 border-racing-border text-racing-silver hover:text-white hover:bg-racing-surface disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={!nextLesson}
                className="flex-1 border-racing-border text-racing-silver hover:text-white hover:bg-racing-surface disabled:opacity-50"
              >
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="racing-card p-6">
            <h3 className="font-orbitron font-bold text-white mb-4">En este Curso</h3>
            <div className="space-y-2">
              {lessons?.map((lessonItem, index) => (
                <div
                  key={lessonItem.id}
                  onClick={() => onLessonChange?.(lessonItem.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    lessonItem.id === lessonId
                      ? 'bg-racing-accent/20 border border-racing-accent/50'
                      : 'hover:bg-racing-surface'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    lessonItem.id === lessonId
                      ? 'bg-racing-accent'
                      : 'bg-racing-surface border border-racing-border'
                  }`}>
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className={`text-sm ${lessonItem.id === lessonId ? 'text-white font-medium' : 'text-racing-silver'}`}>
                    {lessonItem.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
