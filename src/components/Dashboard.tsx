import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { BookOpen, Trophy, Target, LogOut, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCourses, useLessons } from '@/hooks/useCourses';
import { useUserProgress, useCompleteLesson } from '@/hooks/useProgress';

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
            {activeSection === 'cursos' && <CoursesContent user={user} />}
            {activeSection === 'progreso' && <ProgressContent user={user} />}
            {activeSection === 'ejercicios' && <ExercisesContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de cursos con datos reales
const CoursesContent = ({ user }: { user: User }) => {
  const { data: courses, isLoading } = useCourses();
  const { data: progress } = useUserProgress(user);
  const completeLesson = useCompleteLesson();

  if (isLoading) {
    return <div className="text-white">Cargando cursos...</div>;
  }

  const fundamentalsCourse = courses?.find(course => course.title === 'Fundamentos del Karting');
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-orbitron font-bold text-white">Mis Cursos</h2>
      
      {fundamentalsCourse && (
        <LessonsSection 
          course={fundamentalsCourse} 
          user={user} 
          progress={progress || []}
          onCompleteLesson={completeLesson.mutate}
        />
      )}
    </div>
  );
};

const LessonsSection = ({ 
  course, 
  user, 
  progress, 
  onCompleteLesson 
}: { 
  course: any; 
  user: User; 
  progress: any[]; 
  onCompleteLesson: (data: { userId: string; lessonId: string }) => void;
}) => {
  const { data: lessons, isLoading } = useLessons(course.id);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  if (isLoading) {
    return <div className="text-white">Cargando lecciones...</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-orbitron font-bold text-white">{course.title}</h3>
      
      {selectedLesson ? (
        <LessonContent 
          lesson={selectedLesson}
          onBack={() => setSelectedLesson(null)}
          onComplete={() => {
            onCompleteLesson({ userId: user.id, lessonId: selectedLesson.id });
            setSelectedLesson(null);
          }}
          isCompleted={progress.some(p => p.lesson_id === selectedLesson.id && p.completed)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons?.map((lesson, index) => {
            const isCompleted = progress.some(p => p.lesson_id === lesson.id && p.completed);
            const canAccess = index === 0 || progress.some(p => 
              lessons[index - 1] && p.lesson_id === lessons[index - 1].id && p.completed
            );

            return (
              <div key={lesson.id} className={`racing-card p-6 ${!canAccess ? 'opacity-50' : ''}`}>
                <h4 className="text-xl font-orbitron font-semibold text-white mb-3">
                  {lesson.title}
                </h4>
                <p className="text-gray-300 mb-4 font-inter">
                  {lesson.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="level-badge level-amateur">{course.level}</span>
                  <Button 
                    className="racing-button"
                    disabled={!canAccess}
                    onClick={() => {
                      if (canAccess) {
                        setSelectedLesson(lesson);
                      }
                    }}
                  >
                    {isCompleted ? 'Completada' : canAccess ? 'Comenzar' : 'Bloqueada'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const LessonContent = ({ 
  lesson, 
  onBack, 
  onComplete, 
  isCompleted 
}: {
  lesson: any;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}) => {
  const getEnhancedContent = (content: string, lessonTitle: string) => {
    let enhancedContent = content;

    // Agregar elementos visuales y citas según la lección
    if (lessonTitle === 'Posición y Ergonomía') {
      enhancedContent = `
        <div class="mb-8 p-6 bg-racing-red/10 border border-racing-red/30 rounded-lg">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-12 h-12 bg-racing-gradient rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">💺</span>
            </div>
            <div>
              <h3 class="text-racing-gold font-orbitron font-bold">Posición del Piloto</h3>
              <p class="text-gray-300 text-sm">Fundamento esencial del automovilismo</p>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" alt="Posición del piloto en kart" class="w-full h-48 object-cover rounded-lg mb-4 opacity-80" />
        </div>

        <div class="mb-6 p-4 bg-blue-900/20 border-l-4 border-blue-400 rounded">
          <p class="text-blue-300 italic font-inter">
            <span class="text-racing-gold">"</span>La posición es todo. Si no estás cómodo en el coche, no puedes rendir al máximo. Es la base de todo.<span class="text-racing-gold">"</span>
          </p>
          <p class="text-sm text-blue-400 mt-2">— <strong>Lewis Hamilton</strong>, 7 veces Campeón Mundial de F1</p>
        </div>

        ${content}

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="racing-card p-4">
            <h4 class="text-racing-gold font-orbitron font-semibold mb-3">✓ Posición Correcta</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• Rodillas flexionadas 10-15°</li>
              <li>• Brazos ligeramente flexionados</li>
              <li>• Espalda recta contra el asiento</li>
              <li>• Vista alta hacia el horizonte</li>
            </ul>
          </div>
          <div class="racing-card p-4">
            <h4 class="text-red-400 font-orbitron font-semibold mb-3">✗ Errores Comunes</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>• Asiento muy cerca/lejos</li>
              <li>• Brazos completamente extendidos</li>
              <li>• Pulgares dentro del volante</li>
              <li>• Postura encorvada</li>
            </ul>
          </div>
        </div>
      `;
    } else if (lessonTitle === 'Técnicas de Aceleración') {
      enhancedContent = `
        <div class="mb-8 p-6 bg-racing-red/10 border border-racing-red/30 rounded-lg">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-12 h-12 bg-racing-gradient rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">⚡</span>
            </div>
            <div>
              <h3 class="text-racing-gold font-orbitron font-bold">Técnicas de Aceleración</h3>
              <p class="text-gray-300 text-sm">El arte de salir rápido de las curvas</p>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80" alt="Aceleración en karting" class="w-full h-48 object-cover rounded-lg mb-4 opacity-80" />
        </div>

        <div class="mb-6 p-4 bg-green-900/20 border-l-4 border-green-400 rounded">
          <p class="text-green-300 italic font-inter">
            <span class="text-racing-gold">"</span>La aceleración no se trata de fuerza bruta, sino de fineza. Debes sentir el límite del neumático y bailar con él.<span class="text-racing-gold">"</span>
          </p>
          <p class="text-sm text-green-400 mt-2">— <strong>Ayrton Senna</strong>, 3 veces Campeón Mundial de F1</p>
        </div>

        ${content}

        <div class="mt-8 space-y-6">
          <h3 class="text-xl font-orbitron font-bold text-white">Técnicas Visualizadas</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="racing-card p-6">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span class="text-black font-bold">🏎️</span>
                </div>
                <h4 class="text-racing-gold font-orbitron font-semibold">Hairpins (Curvas Cerradas)</h4>
              </div>
              <img src="https://images.unsplash.com/photo-1558618047-dd3d8b6ad67e?auto=format&fit=crop&w=400&q=80" alt="Curva hairpin" class="w-full h-32 object-cover rounded mb-3 opacity-80" />
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• Late apex (vértice tardío)</li>
                <li>• Aceleración muy progresiva</li>
                <li>• Esperar a estar recto</li>
                <li>• Priorizar la salida</li>
              </ul>
            </div>

            <div class="racing-card p-6">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">🌀</span>
                </div>
                <h4 class="text-racing-gold font-orbitron font-semibold">Sweepers (Curvas Rápidas)</h4>
              </div>
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80" alt="Curva rápida" class="w-full h-32 object-cover rounded mb-3 opacity-80" />
              <ul class="space-y-1 text-sm text-gray-300">
                <li>• Aceleración temprana</li>
                <li>• Maintenance throttle</li>
                <li>• Línea más fluida</li>
                <li>• Velocidad constante</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <h4 class="text-orange-400 font-orbitron font-semibold mb-3 flex items-center">
              <span class="mr-2">⚠️</span>
              Consejo de Alain Prost
            </h4>
            <p class="text-orange-200 italic font-inter">
              "Para ganar carreras, debes ser suave con el acelerador. Los pilotos jóvenes piensan que más potencia es mejor, pero la consistencia y la suavidad son la clave del éxito."
            </p>
            <p class="text-sm text-orange-400 mt-2">— <strong>Alain Prost</strong>, "El Profesor", 4 veces Campeón Mundial</p>
          </div>
        </div>
      `;
    } else if (lessonTitle === 'Frenado Efectivo') {
      enhancedContent = `
        <div class="mb-8 p-6 bg-racing-red/10 border border-racing-red/30 rounded-lg">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-12 h-12 bg-racing-gradient rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">🔥</span>
            </div>
            <div>
              <h3 class="text-racing-gold font-orbitron font-bold">Técnicas de Frenado</h3>
              <p class="text-gray-300 text-sm">Donde se ganan y pierden las carreras</p>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" alt="Frenado en automovilismo" class="w-full h-48 object-cover rounded-lg mb-4 opacity-80" />
        </div>

        <div class="mb-6 p-4 bg-red-900/20 border-l-4 border-red-400 rounded">
          <p class="text-red-300 italic font-inter">
            <span class="text-racing-gold">"</span>El frenado es un arte. No se trata solo de pisar fuerte, sino de saber cuándo soltar y cómo modular la presión. Eso separa a los buenos de los grandes.<span class="text-racing-gold">"</span>
          </p>
          <p class="text-sm text-red-400 mt-2">— <strong>Michael Schumacher</strong>, 7 veces Campeón Mundial de F1</p>
        </div>

        ${content}

        <div class="mt-8 space-y-6">
          <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <h4 class="text-purple-400 font-orbitron font-semibold mb-4 flex items-center">
              <span class="mr-2">🎯</span>
              Trail Braking según Hamilton
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-center">
                <div class="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span class="text-white font-bold">1</span>
                </div>
                <p class="text-sm text-purple-200">Frenado inicial al 100%</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span class="text-white font-bold">2</span>
                </div>
                <p class="text-sm text-purple-200">Reducir presión gradualmente</p>
              </div>
              <div class="text-center">
                <div class="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span class="text-white font-bold">3</span>
                </div>
                <p class="text-sm text-purple-200">Mantener residual en curva</p>
              </div>
            </div>
            <p class="text-purple-200 italic text-sm mt-4">
              "El trail braking me ha dado ventaja en incontables adelantamientos. Es la técnica más importante que domino."
            </p>
          </div>
        </div>
      `;
    }

    return enhancedContent
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-racing-gold">$1</strong>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-orbitron font-bold text-white mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-orbitron font-bold text-white mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-orbitron font-bold text-white mt-8 mb-6">$1</h1>')
      .replace(/- (.*$)/gim, '<div class="flex items-start space-x-2 mb-2"><div class="w-1.5 h-1.5 bg-racing-red rounded-full mt-2 flex-shrink-0"></div><span>$1</span></div>')
      .replace(/https?:\/\/[^\s]+/g, '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-racing-gold hover:text-racing-red inline-flex items-center space-x-1"><span>$&</span><svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>');
  };

  return (
    <div className="racing-card p-8">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-racing-red/30 text-white hover:bg-racing-red/10"
        >
          ← Volver a lecciones
        </Button>
        {!isCompleted && (
          <Button 
            onClick={onComplete}
            className="racing-button"
          >
            Marcar como completada
          </Button>
        )}
      </div>
      
      <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
        {lesson.title}
      </h2>
      
      <div className="prose prose-invert max-w-none">
        <div 
          className="text-gray-300 font-inter leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: getEnhancedContent(lesson.content, lesson.title)
          }}
        />
      </div>
      
      {isCompleted && (
        <div className="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
          <p className="text-green-400 font-inter">
            ✓ Lección completada
          </p>
        </div>
      )}
    </div>
  );
};

const ProgressContent = ({ user }: { user: User }) => {
  const { data: progress, isLoading } = useUserProgress(user);
  const { data: courses } = useCourses();

  if (isLoading) {
    return <div className="text-white">Cargando progreso...</div>;
  }

  const completedLessons = progress?.filter(p => p.completed).length || 0;
  const totalLessons = 3; // Por ahora tenemos 3 lecciones en Fundamentos

  return (
    <div className="racing-card p-6">
      <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Mi Progreso</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-white mb-2">
            <span className="font-inter">Fundamentos del Karting</span>
            <span className="font-orbitron">{Math.round((completedLessons / totalLessons) * 100)}%</span>
          </div>
          <div className="w-full bg-racing-black-light rounded-full h-3">
            <div 
              className="bg-racing-gradient h-3 rounded-full transition-all duration-500" 
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
          <p className="text-gray-300 text-sm mt-2">
            {completedLessons} de {totalLessons} lecciones completadas
          </p>
        </div>
      </div>
    </div>
  );
};

const ExercisesContent = () => (
  <div className="racing-card p-6">
    <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Ejercicios Prácticos</h2>
    <p className="text-gray-300 font-inter">
      Los ejercicios se desbloquearán conforme completes las lecciones.
    </p>
  </div>
);

export default Dashboard;
