-- Create courses table
CREATE TABLE public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  level TEXT NOT NULL CHECK (level IN ('amateur', 'professional', 'expert')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create lessons table
CREATE TABLE public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create user_progress table
CREATE TABLE public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, lesson_id)
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Courses and lessons are public for reading
CREATE POLICY "Courses are viewable by everyone" ON public.courses
  FOR SELECT USING (true);

CREATE POLICY "Lessons are viewable by everyone" ON public.lessons
  FOR SELECT USING (true);

-- User progress policies
CREATE POLICY "Users can view own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Insert sample courses
INSERT INTO public.courses (title, description, level) VALUES
('Fundamentos del Karting', 'Aprende las bases del karting desde cero. Curso diseñado para principiantes que quieren dominar los fundamentos.', 'amateur'),
('Técnicas Avanzadas', 'Perfecciona tu técnica de conducción con métodos profesionales de entrenamiento.', 'professional'),
('Competición Elite', 'Preparación completa para competiciones profesionales de alto nivel.', 'expert');

-- Insert lessons for Fundamentos del Karting
INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Introducción al Karting', 'Conoce el mundo del karting y sus fundamentos básicos',
'## Bienvenido al Mundo del Karting

El karting es la base de todo piloto profesional. Desde Ayrton Senna hasta Lewis Hamilton, todos comenzaron en karts.

### ¿Por qué empezar en karting?

- **Desarrollo de reflejos**: El karting entrena tu capacidad de reacción
- **Sensibilidad mecánica**: Aprenderás a sentir el comportamiento del vehículo
- **Técnica pura**: Sin ayudas electrónicas, todo depende del piloto

### Equipamiento básico

1. Casco homologado
2. Mono de competición
3. Guantes y botas
4. Protector de costillas

### Próximos pasos

En las siguientes lecciones aprenderás la postura correcta, técnicas de aceleración y frenado efectivo.', 1
FROM public.courses c WHERE c.title = 'Fundamentos del Karting';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Posición y Ergonomía', 'Aprende la postura correcta para maximizar control y reducir fatiga',
'## Posición Correcta en el Kart

La postura es fundamental para el control y la resistencia durante una carrera.

### Posición de las manos

- **Agarre 9 y 3**: Mantén las manos en posición simétrica
- **Pulgares por fuera**: Nunca dentro del volante
- **Brazos semiflexionados**: Permite mejor control

### Posición del cuerpo

1. Espalda completamente apoyada en el asiento
2. Hombros relajados pero firmes
3. Cabeza erguida mirando hacia adelante

### Posición de los pies

- **Pie derecho**: Cubre completamente el pedal del acelerador
- **Pie izquierdo**: Listo sobre el freno, talón como pivote

### Ejercicios recomendados

Practica 15 minutos al día ajustando tu posición hasta que sea natural.', 2
FROM public.courses c WHERE c.title = 'Fundamentos del Karting';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Técnicas de Aceleración', 'Domina el control del acelerador para tracción óptima',
'## Domina el Acelerador

El control del acelerador determina tu velocidad en las rectas y tu tracción en las curvas.

### Principios fundamentales

- **Progresividad**: Nunca apliques el acelerador bruscamente
- **Suavidad**: Transiciones fluidas entre frenado y aceleración
- **Timing**: El momento de acelerar es tan importante como la cantidad

### Técnica de salida

1. RPM óptimas antes de soltar el embrague
2. Modula el acelerador según el agarre
3. Mantén el kart recto los primeros metros

### Trail Throttle

El "trail throttle" consiste en mantener un pequeño porcentaje de acelerador durante la entrada a curva para:
- Mantener el balance del kart
- Evitar transferencias bruscas de peso
- Preparar la salida de curva

### Errores comunes

- Acelerar demasiado pronto en curva (subviraje)
- Levantar bruscamente el acelerador (sobreviraje)
- No aprovechar toda la potencia en recta', 3
FROM public.courses c WHERE c.title = 'Fundamentos del Karting';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Frenado Efectivo', 'Aprende las técnicas de frenado para diferentes situaciones',
'## Frenado Profesional

El frenado es donde se ganan las carreras. Un buen frenado te permite entrar más rápido a las curvas.

### Tipos de frenado

- **Threshold braking**: Frenar al límite de adherencia
- **Trail braking**: Mantener frenado mientras giras
- **Cadence braking**: Para superficies de baja adherencia

### Puntos de frenado

1. Identifica referencias visuales en la pista
2. Sé consistente en cada vuelta
3. Adapta según condiciones del asfalto

### Técnica de threshold braking

El objetivo es frenar al máximo sin bloquear las ruedas:

1. Aplica el freno de forma progresiva pero rápida
2. Siente el punto de bloqueo
3. Modula justo debajo de ese punto
4. Libera gradualmente mientras giras

### Práctica recomendada

Dedica sesiones específicas solo a practicar frenado antes de buscar tiempo por vuelta.', 4
FROM public.courses c WHERE c.title = 'Fundamentos del Karting';

-- Insert lessons for Técnicas Avanzadas
INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Línea de Carrera Óptima', 'Aprende a trazar la línea más rápida en cada curva',
'## La Línea Perfecta

La línea de carrera es el camino más rápido alrededor de una pista.

### Concepto básico

- **Punto de entrada**: Donde empiezas a girar
- **Ápex**: El punto más cercano al interior
- **Punto de salida**: Donde terminas la curva

### Tipos de ápex

1. **Early apex**: Para curvas seguidas de recta corta
2. **Geometric apex**: Punto medio geométrico
3. **Late apex**: Para curvas seguidas de recta larga

### Análisis de curvas

Cada curva requiere un análisis específico considerando:
- Velocidad de entrada
- Radio de curvatura
- Lo que viene después

### Ejercicio práctico

Camina la pista a pie y marca mentalmente tus referencias.', 1
FROM public.courses c WHERE c.title = 'Técnicas Avanzadas';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Gestión de Neumáticos', 'Aprende a cuidar y maximizar el rendimiento de tus neumáticos',
'## Neumáticos: Tu Mayor Aliado

Los neumáticos son el único contacto entre tu kart y el asfalto.

### Temperatura de trabajo

- **Muy fríos**: Sin agarre, derrapajes
- **Óptimos**: Máximo agarre y consistencia  
- **Sobrecalentados**: Degradación acelerada

### Técnicas de calentamiento

1. Zigzaguea suavemente en la vuelta de calentamiento
2. Frena con más fuerza de lo normal
3. Acelera progresivamente para generar calor

### Presiones

La presión afecta directamente el comportamiento:
- **Baja presión**: Más agarre pero más desgaste
- **Alta presión**: Menos desgaste pero menos agarre

### Lectura del neumático

Aprende a "leer" tus neumáticos después de cada sesión:
- Desgaste uniforme = setup correcto
- Desgaste interior = demasiada presión o camber
- Desgaste exterior = poca presión', 2
FROM public.courses c WHERE c.title = 'Técnicas Avanzadas';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Adelantamientos Inteligentes', 'Estrategias para adelantar de forma segura y efectiva',
'## El Arte del Adelantamiento

Adelantar es más que velocidad pura. Es estrategia, timing y valentía controlada.

### Preparación del adelantamiento

1. Estudia a tu rival durante varias vueltas
2. Identifica sus puntos débiles
3. Elige el lugar ideal para atacar

### Técnicas de adelantamiento

- **Por dentro en frenada**: La más común y efectiva
- **Por fuera**: Requiere más valentía y habilidad
- **Switchback**: Finta por dentro, sales por fuera

### Psicología del duelo

- Mantén la presión sin arriesgar contacto
- Haz que tu rival cometa errores
- Sé paciente pero decidido

### Defensa legal

Cuando te atacan:
- Una maniobra defensiva por curva
- No cambies de línea en zona de frenado
- Respeta el espacio del rival', 3
FROM public.courses c WHERE c.title = 'Técnicas Avanzadas';

-- Insert lessons for Competición Elite
INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Preparación Mental', 'Técnicas mentales utilizadas por pilotos profesionales',
'## La Mente del Campeón

El 90% del rendimiento en competición es mental.

### Visualización

- Imagina cada curva perfectamente ejecutada
- Visualiza toda la carrera antes de correr
- Practica mentalmente cuando no estés en pista

### Control del estrés

1. Técnicas de respiración 4-7-8
2. Rutinas pre-carrera consistentes
3. Música o silencio según preferencia

### Zona de flujo

El estado de "flow" es cuando todo fluye naturalmente:
- Concentración total sin esfuerzo
- El tiempo parece ralentizarse
- Rendimiento óptimo automático

### Gestión de errores

- Olvida el error inmediatamente
- Enfócate en la siguiente curva
- Analiza después, no durante', 1
FROM public.courses c WHERE c.title = 'Competición Elite';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Análisis de Telemetría', 'Interpreta datos para encontrar décimas de segundo',
'## Telemetría: Los Datos No Mienten

La telemetría revela exactamente dónde ganar tiempo.

### Datos clave

- **Velocidad en curva**: ¿Frenas demasiado?
- **Punto de frenado**: ¿Puedes frenar más tarde?
- **Aceleración**: ¿Aceleras en el momento correcto?

### Comparación de vueltas

1. Compara tu mejor sector con la vuelta completa
2. Analiza diferencias con otros pilotos
3. Identifica dónde pierdes décimas

### Herramientas

- Software de análisis (AiM, MyChron)
- GPS para mapear la pista
- Sensores de aceleración

### Interpretación práctica

No te pierdas en los datos:
- Enfócate en 2-3 mejoras por sesión
- Prioriza las curvas más lentas
- Valida cambios en pista', 2
FROM public.courses c WHERE c.title = 'Competición Elite';

INSERT INTO public.lessons (course_id, title, description, content, order_index) 
SELECT c.id, 'Estrategia de Carrera', 'Planifica y ejecuta estrategias ganadoras',
'## Pensamiento Estratégico

Una carrera se gana tanto con la cabeza como con el pie derecho.

### Antes de la carrera

1. Estudia a tus rivales
2. Conoce el reglamento específico
3. Planifica diferentes escenarios

### La salida

- **Posición en parrilla**: Cada posición requiere táctica diferente
- **Primera curva**: No necesitas ganar aquí, solo sobrevivir
- **Primeras vueltas**: Establece tu ritmo

### Gestión de carrera

- Cuándo atacar vs cuándo conservar
- Lectura de neumáticos del rival
- Adaptación a banderas y situaciones

### Últimas vueltas

- Gestión del gap
- Defensa inteligente
- El momento del ataque final', 3
FROM public.courses c WHERE c.title = 'Competición Elite';