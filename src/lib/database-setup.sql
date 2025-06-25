
-- Crear tabla de cursos
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT NOT NULL CHECK (level IN ('amateur', 'professional', 'expert')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Crear tabla de lecciones
CREATE TABLE lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Crear tabla de progreso del usuario
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, lesson_id)
);

-- Insertar datos iniciales
INSERT INTO courses (title, description, level) VALUES
('Fundamentos del Karting', 'Aprende las bases del karting desde cero', 'amateur'),
('Técnicas Avanzadas', 'Perfecciona tu técnica de conducción', 'professional'),
('Competición Elite', 'Preparación para competiciones profesionales', 'expert');

-- Insertar lecciones para el curso de Fundamentos
INSERT INTO lessons (course_id, title, description, content, order_index) 
SELECT 
  c.id,
  'Posición y Ergonomía',
  'Aprende la postura correcta para maximizar control y reducir fatiga',
  'En esta lección aprenderás la importancia de una postura correcta en el karting...',
  1
FROM courses c WHERE c.title = 'Fundamentos del Karting';

INSERT INTO lessons (course_id, title, description, content, order_index) 
SELECT 
  c.id,
  'Técnicas de Aceleración',
  'Domina el control del acelerador para tracción óptima',
  'La aceleración suave y progresiva es clave para mantener la tracción...',
  2
FROM courses c WHERE c.title = 'Fundamentos del Karting';

INSERT INTO lessons (course_id, title, description, content, order_index) 
SELECT 
  c.id,
  'Frenado Efectivo',
  'Aprende las técnicas de frenado para diferentes situaciones',
  'El frenado efectivo es crucial para la seguridad y el rendimiento...',
  3
FROM courses c WHERE c.title = 'Fundamentos del Karting';

-- Habilitar RLS (Row Level Security)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Políticas para courses (públicas para lectura)
CREATE POLICY "Courses are viewable by everyone" ON courses
  FOR SELECT USING (true);

-- Políticas para lessons (públicas para lectura)
CREATE POLICY "Lessons are viewable by everyone" ON lessons
  FOR SELECT USING (true);

-- Políticas para user_progress (usuarios solo ven su progreso)
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE USING (auth.uid() = user_id);
