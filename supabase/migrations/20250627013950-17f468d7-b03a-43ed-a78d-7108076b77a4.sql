
-- Actualizamos el contenido existente con términos técnicos y referencias reales
UPDATE lessons 
SET content = 'La posición correcta en el kart es la base de todo. Como instructor, he visto cómo una mala ergonomía arruina el rendimiento de pilotos con mucho talento.

**¿Por qué es crucial tu posición?**
Una posición incorrecta genera **driver fatigue** (fatiga del piloto) y reduce el **car control** (control del vehículo).

**Configuración del asiento:**

**Distancia a los pedales:**
- Configura para tener un **knee bend** (flexión de rodilla) de 10-15 grados
- Demasiado cerca: pierdes potencia de frenado
- Demasiado lejos: no puedes modular correctamente

**Posición del volante:**
- **Hand position**: 9 y 3 en punto (técnica **quarter-to-three**)
- **Thumb placement**: pulgares sobre el volante, nunca dentro de los rayos
- Esto previene lesiones durante el **bump steer** (sacudidas del volante)

**Técnica de **dead pedal**:**
- Pie izquierdo siempre apoyado en el reposapiés
- Esto te da un **reference point** (punto de referencia) para las fuerzas G

**Posición de la cabeza:**
- **High eye line**: vista alta, mirando hacia el **apex** (vértice de la curva)
- Fortalece el cuello para resistir las **lateral G-forces**

**Referencias técnicas:**
- Manual de la FIA sobre ergonomía en karting
- Estudios de biomecánica en automovilismo deportivo

**Términos que acabas de aprender:**
- **Driver fatigue**: Cansancio físico que afecta el rendimiento
- **Car control**: Capacidad de manejar el vehículo con precisión
- **Knee bend**: Ángulo de flexión de las rodillas
- **Dead pedal**: Reposapiés para el pie izquierdo'
WHERE title = 'Posición y Ergonomía';

UPDATE lessons 
SET content = 'La **throttle application** (aplicación del acelerador) correcta es lo que diferencia a un piloto rápido de uno amateur.

**Concepto fundamental: Traction Circle**
Los neumáticos tienen un límite de **grip** (agarre). Si lo superas, experimentas **wheelspin** (patinada de ruedas).

**Técnicas de aceleración:**

**Progressive throttle application:**
- Empieza con 20-30% de **throttle input** (entrada de acelerador)
- Aumenta gradualmente hasta el 100%
- Evita el **sudden throttle application** (aceleración brusca)

**Técnica en diferentes tipos de curvas:**

**Hairpins** (curvas cerradas):
- **Late apex entry** con aceleración muy progresiva
- Espera a que el kart esté completamente recto antes del **full throttle**

**Sweepers** (curvas rápidas):
- Puedes empezar la aceleración antes del **corner exit**
- Usa la técnica de **maintenance throttle** (acelerador de mantenimiento)

**Cómo detectar **oversteer** por exceso de aceleración:**
- La parte trasera del kart se desliza hacia afuera
- Se siente como pérdida de **rear grip**
- Corrige reduciendo el **throttle input** gradualmente

**Referencias técnicas:**
- "Traction Circle Theory" - Carroll Smith
- Análisis de telemetría de karting profesional
- Estudios de **power delivery** en motores de karting

**Términos técnicos explicados:**
- **Throttle application**: Forma de aplicar el acelerador
- **Traction Circle**: Límite teórico de agarre de los neumáticos
- **Wheelspin**: Patinada de las ruedas por exceso de potencia
- **Progressive**: Gradual, sin movimientos bruscos
- **Hairpins**: Curvas muy cerradas, generalmente de 180 grados
- **Sweepers**: Curvas amplias y rápidas
- **Oversteer**: El kart gira más de lo que indica el volante'
WHERE title = 'Técnicas de Aceleración';

UPDATE lessons 
SET content = 'El **braking technique** es donde se define un piloto competitivo. Es física pura aplicada al automovilismo.

**Conceptos fundamentales:**

**Weight transfer** (transferencia de peso):
- Al frenar, el peso se transfiere hacia adelante
- Esto aumenta el **front grip** y reduce el **rear grip**
- Entender esto es clave para el **trail braking**

**Técnica de frenado:**

**Initial brake application** (frenado inicial):
- 100% de **brake pressure** en línea recta
- Aprovecha al máximo el **longitudinal grip**
- El **brake pedal feel** debe ser firme y consistente

**Brake modulation** (modulación del freno):
- Cuando inicias el **turn-in**, reduce gradualmente el **brake pressure**
- Sigue la regla: más **steering input** = menos **brake input**

**Trail braking avanzado:**
- Mantén **residual brake pressure** durante la entrada a curva
- Esto genera **controlled oversteer** que ayuda al **turn-in**
- Técnica avanzada: requiere mucha práctica

**Brake balance** (balance de frenado):
- En karts básicos no es ajustable
- En karts avanzados, puedes ajustar el **front/rear brake bias**

**Señales de **brake lockup** (bloqueo de frenos):**
- Vibración en el **brake pedal**
- **Flat spots** en los neumáticos
- Pérdida de **directional control**

**Referencias técnicas:**
- "Brake System Design and Testing" - SAE International
- Análisis de **brake telemetry** en competición
- Estudios de **heat management** en sistemas de frenos

**Términos técnicos:**
- **Weight transfer**: Movimiento del peso del vehículo durante aceleración/frenado
- **Trail braking**: Mantener freno parcial mientras se entra en curva
- **Brake modulation**: Variación controlada de la presión de frenado
- **Brake lockup**: Bloqueo de ruedas por exceso de frenado
- **Turn-in**: Momento de iniciar el giro en una curva
- **Brake balance**: Distribución de fuerza de frenado entre ejes'
WHERE title = 'Frenado Efectivo';

-- Ahora creamos el glosario como una lección especial
INSERT INTO lessons (course_id, title, description, content, order_index) 
SELECT 
  c.id,
  'Glosario Técnico',
  'Diccionario completo de términos técnicos utilizados en el curso',
  '# GLOSARIO TÉCNICO DE KARTING

**A**
- **Apex**: Punto más interior de una curva, donde el kart está más cerca del bordillo interno
- **Aerodynamics**: Ciencia que estudia el movimiento del aire alrededor del kart

**B**
- **Brake balance**: Distribución de la fuerza de frenado entre el eje delantero y trasero
- **Brake fade**: Pérdida de eficacia de los frenos por sobrecalentamiento
- **Brake lockup**: Bloqueo de las ruedas por aplicar demasiada fuerza de frenado
- **Brake modulation**: Técnica de variar la presión del freno de forma controlada
- **Bump steer**: Cambio no deseado en la dirección debido a irregularidades del asfalto

**C**
- **Car control**: Habilidad del piloto para manejar el kart con precisión
- **Corner exit**: Salida de una curva
- **Corner entry**: Entrada a una curva
- **Controlled oversteer**: Sobreviraje intencionado y controlado

**D**
- **Dead pedal**: Reposapiés para el pie izquierdo que no opera ningún control
- **Directional control**: Capacidad de controlar la dirección del kart
- **Driver fatigue**: Cansancio físico del piloto que afecta su rendimiento

**F**
- **Flat spots**: Zonas planas en los neumáticos causadas por bloqueo de frenos
- **Front grip**: Agarre disponible en las ruedas delanteras
- **Full throttle**: Acelerador al 100%

**G**
- **G-forces**: Fuerzas de aceleración que actúan sobre el piloto y el kart
- **Grip**: Agarre entre los neumáticos y el asfalto

**H**
- **Hairpins**: Curvas muy cerradas, generalmente de 180 grados
- **Heat management**: Control de la temperatura en componentes del kart

**K**
- **Knee bend**: Ángulo de flexión de las rodillas en la posición de manejo

**L**
- **Late apex**: Técnica de tomar el vértice de la curva más tarde de lo normal
- **Lateral G-forces**: Fuerzas que actúan lateralmente durante las curvas
- **Longitudinal grip**: Agarre disponible para acelerar y frenar

**M**
- **Maintenance throttle**: Mantener una aceleración constante y suave

**O**
- **Oversteer**: Tendencia del kart a girar más de lo que indica el volante

**P**
- **Power delivery**: Forma en que el motor entrega la potencia
- **Progressive**: Aplicación gradual y suave de controles

**R**
- **Rear grip**: Agarre disponible en las ruedas traseras
- **Reference point**: Punto visual de referencia en la pista
- **Residual brake pressure**: Presión mínima mantenida en el freno

**S**
- **Steering input**: Movimiento aplicado al volante
- **Sweepers**: Curvas amplias y de radio constante

**T**
- **Throttle application**: Forma de aplicar el acelerador
- **Throttle input**: Presión aplicada al pedal del acelerador
- **Traction circle**: Concepto que representa el límite de agarre de los neumáticos
- **Trail braking**: Técnica de mantener presión de freno mientras se entra en curva
- **Turn-in**: Momento de iniciar el giro hacia una curva

**U**
- **Understeer**: Tendencia del kart a girar menos de lo que indica el volante

**W**
- **Weight transfer**: Movimiento del peso del kart durante aceleración, frenado o giro
- **Wheelspin**: Patinada de las ruedas por exceso de potencia

---

**Referencias y enlaces útiles:**
- FIA Karting Regulations: https://www.fia.com/regulation/category/123
- International Karting Commission: https://www.cik-fia.com/
- Karting technique analysis: Racing Line publications
- Technical papers on vehicle dynamics: SAE International',
  4
FROM courses c WHERE c.title = 'Fundamentos del Karting';
