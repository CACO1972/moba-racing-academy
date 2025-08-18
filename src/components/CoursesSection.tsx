import { Book, Play, FileText, ExternalLink, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProTermsDialog from '@/components/ProTermsDialog';

const courses = [
  {
    id: 'fundamentos',
    title: 'Fundamentos del Karting',
    description: 'Aprende los conceptos básicos de la conducción deportiva empezando por karting.',
    level: 'Amateur',
    levelColor: 'level-amateur',
    duration: '45 min',
    lessons: 8,
    students: 1250,
    topics: [
      'Posición y ergonomía del piloto',
      'Técnicas básicas de aceleración',
      'Conceptos de frenado progresivo',
      'Línea de carrera ideal'
    ],
    image: 'photo-1540739313152-b3e4b1c8a2f6',
    resources: [
      { type: 'video', title: 'Introducción al Karting', duration: '12 min' },
      { type: 'infographic', title: 'Posición ideal del piloto' },
      { type: 'exercise', title: 'Simulador de frenado básico' },
      { type: 'pdf', title: 'Guía de seguridad en pista' }
    ]
  },
  {
    id: 'trail-braking',
    title: 'Trail Braking Avanzado',
    description: 'Domina la técnica más importante del automovilismo moderno.',
    level: 'Profesional',
    levelColor: 'level-professional',
    duration: '90 min',
    lessons: 12,
    students: 890,
    topics: [
      'Teoría del trail braking',
      'Modulación del pedal de freno',
      'Transferencia de peso dinámica',
      'Aplicación en diferentes curvas'
    ],
    image: 'photo-1583121274602-3e2820c69888',
    resources: [
      { type: 'video', title: 'Trail Braking Explicado', duration: '25 min' },
      { type: 'infographic', title: 'Transferencia de peso' },
      { type: 'exercise', title: 'Simulador de trail braking' },
      { type: 'link', title: 'Análisis de F1 - Verstappen vs Hamilton' }
    ]
  },
  {
    id: 'telemetria',
    title: 'Análisis de Telemetría',
    description: 'Utiliza los datos para mejorar tu rendimiento en pista.',
    level: 'Senior',
    levelColor: 'level-senior',
    duration: '120 min',
    lessons: 15,
    students: 420,
    topics: [
      'Lectura de datos de telemetría',
      'Análisis de velocidades en curva',
      'Optimización de trazadas',
      'Comparación entre pilotos'
    ],
    image: 'photo-1558618666-fcd25c85cd64',
    resources: [
      { type: 'video', title: 'Introducción a la telemetría', duration: '30 min' },
      { type: 'infographic', title: 'Dashboard de telemetría' },
      { type: 'exercise', title: 'Análisis de vuelta completa' },
      { type: 'pdf', title: 'Guía de software de telemetría' }
    ]
  },
  {
    id: 'setup',
    title: 'Setup y Configuración',
    description: 'Optimiza la configuración de tu vehículo para cada circuito.',
    level: 'Profesional',
    levelColor: 'level-professional',
    duration: '75 min',
    lessons: 10,
    students: 650,
    topics: [
      'Fundamentos de suspensión',
      'Configuración aerodinámica',
      'Presiones y temperaturas de neumáticos',
      'Ajustes específicos por circuito'
    ],
    image: 'photo-1571019613454-1cb2f99b2d8b',
    resources: [
      { type: 'video', title: 'Setup básico de karting', duration: '20 min' },
      { type: 'infographic', title: 'Componentes de suspensión' },
      { type: 'exercise', title: 'Calculadora de setup' },
      { type: 'link', title: 'Base de datos de setups' }
    ]
  },
  {
    id: 'programa-pro',
    title: 'Programa Pro: Sim + Pista',
    description: 'Nivel Senior + simuladores profesionales + entrenamiento en pista real con karting, carrozado o fórmula.',
    level: 'Pro',
    levelColor: 'level-pro',
    duration: '20+ horas',
    lessons: 30,
    students: 47,
    topics: [
      'Todo el contenido Senior',
      'Simuladores profesionales',
      'Práctica en pista - Karting',
      'Práctica en pista - Carrozado/Fórmula'
    ],
    image: 'photo-1568605114967-8130f3a36994',
    resources: [
      { type: 'video', title: 'Introducción al Programa Pro', duration: '15 min' },
      { type: 'infographic', title: 'Simuladores disponibles' },
      { type: 'exercise', title: 'Evaluación pre-pista' },
      { type: 'link', title: 'Condiciones y términos', isProTerms: true }
    ],
    isProProgram: true
  }
];

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'video': return Play;
    case 'infographic': return FileText;
    case 'exercise': return Book;
    case 'pdf': return FileText;
    case 'link': return ExternalLink;
    default: return Book;
  }
};

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 bg-racing-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-racing-red/20 border border-racing-red/30 rounded-full mb-6">
            <Book className="w-4 h-4 text-racing-red mr-2" />
            <span className="text-racing-red font-orbitron font-semibold text-sm">
              Cursos Disponibles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Contenido
            <span className="text-transparent bg-clip-text bg-racing-gradient"> Especializado</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Cada curso incluye videos explicativos, infografías interactivas, ejercicios prácticos y recursos externos cuidadosamente seleccionados.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} className={`racing-card overflow-hidden ${course.isProProgram ? 'ring-2 ring-purple-500/30' : ''}`}>
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-racing-red/20 to-racing-black overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-racing-black via-transparent to-transparent" />
                <Badge className={`absolute top-4 left-4 level-badge ${course.levelColor}`}>
                  {course.level}
                </Badge>
                {course.isProProgram && (
                  <Badge className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Programa Exclusivo
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-orbitron font-bold text-white mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-inter">
                      {course.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center space-x-6 text-sm text-gray-400 font-inter mt-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Book className="w-4 h-4" />
                    <span>{course.lessons} lecciones</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} estudiantes</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Topics */}
                <div>
                  <h4 className="font-orbitron font-semibold text-white text-sm mb-3">Temas principales:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="text-gray-300 font-inter text-sm flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${course.isProProgram ? 'bg-purple-400' : 'bg-racing-red'}`} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-orbitron font-semibold text-white text-sm mb-3">Recursos incluidos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.resources.map((resource, index) => {
                      const Icon = getResourceIcon(resource.type);
                      return (
                        <div key={index} className="flex items-center space-x-2 text-gray-400 text-xs font-inter">
                          <Icon className="w-3 h-3 text-racing-gold flex-shrink-0" />
                          {resource.isProTerms ? (
                            <ProTermsDialog>
                              <button className="truncate hover:text-purple-400 transition-colors">
                                {resource.title}
                              </button>
                            </ProTermsDialog>
                          ) : (
                            <span className="truncate">{resource.title}</span>
                          )}
                          {resource.duration && (
                            <span className="text-gray-500">({resource.duration})</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button className={`w-full ${course.isProProgram ? 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900' : 'racing-button'}`}>
                  {course.isProProgram ? 'Consultar Programa Pro' : 'Acceder al Curso'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 font-inter mb-6">
            ¿Buscas un curso específico? Explora nuestro catálogo completo.
          </p>
          <Button variant="outline" className="border-racing-red/30 text-white hover:bg-racing-red/10 hover:border-racing-red">
            Ver Todos los Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
