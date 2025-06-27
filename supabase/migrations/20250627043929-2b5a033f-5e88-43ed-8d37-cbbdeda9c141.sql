
-- Verificar y crear políticas RLS para que todos puedan leer los cursos y lecciones
-- (ya que es contenido educativo público)

-- Habilitar RLS en las tablas si no está habilitado
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Crear políticas para permitir lectura pública de cursos
DROP POLICY IF EXISTS "Cursos son públicos para lectura" ON public.courses;
CREATE POLICY "Cursos son públicos para lectura" 
  ON public.courses 
  FOR SELECT 
  USING (true);

-- Crear políticas para permitir lectura pública de lecciones  
DROP POLICY IF EXISTS "Lecciones son públicas para lectura" ON public.lessons;
CREATE POLICY "Lecciones son públicas para lectura" 
  ON public.lessons 
  FOR SELECT 
  USING (true);

-- Verificar que las políticas para user_progress requieren autenticación
DROP POLICY IF EXISTS "Usuarios ven su propio progreso" ON public.user_progress;
CREATE POLICY "Usuarios ven su propio progreso" 
  ON public.user_progress 
  FOR SELECT 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Usuarios pueden crear su progreso" ON public.user_progress;
CREATE POLICY "Usuarios pueden crear su progreso" 
  ON public.user_progress 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Usuarios pueden actualizar su progreso" ON public.user_progress;
CREATE POLICY "Usuarios pueden actualizar su progreso" 
  ON public.user_progress 
  FOR UPDATE 
  USING (auth.uid() = user_id);
