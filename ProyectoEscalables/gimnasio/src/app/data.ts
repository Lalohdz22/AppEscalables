// Datos de ejemplo solo para maquetar las vistas.
export const PLANES = [
  { nombre: 'Básico', precio: 399, periodo: 'mes', destacado: false,
    beneficios: ['Acceso a sala de pesas', 'Horario de 6:00 a 16:00', 'Casillero del día'] },
  { nombre: 'Plus', precio: 599, periodo: 'mes', destacado: true,
    beneficios: ['Acceso completo todo el día', '3 clases grupales por semana', 'Rutina personalizada'] },
  { nombre: 'Anual', precio: 5990, periodo: 'año', destacado: false,
    beneficios: ['Todo lo del plan Plus', 'Clases grupales ilimitadas', '2 meses gratis'] },
];

export const ENTRENADORES = [
  { nombre: 'Mariana Ortiz', especialidad: 'Fuerza y acondicionamiento', experiencia: '8 años' },
  { nombre: 'Carlos Medina', especialidad: 'Spinning y cardio', experiencia: '5 años' },
  { nombre: 'Ana Rivas', especialidad: 'Yoga y movilidad', experiencia: '6 años' },
  { nombre: 'Luis Barrera', especialidad: 'Funcional y HIIT', experiencia: '4 años' },
];

export const CLASES = [
  { id: 1, nombre: 'Fuerza total', tipo: 'Fuerza', nivel: 'Intermedio', dia: 'Lunes', hora: '07:00', entrenador: 'Mariana Ortiz', cupo: 20, inscritos: 14 },
  { id: 2, nombre: 'Spinning', tipo: 'Cardio', nivel: 'Todos', dia: 'Lunes', hora: '18:30', entrenador: 'Carlos Medina', cupo: 15, inscritos: 15 },
  { id: 3, nombre: 'Yoga restaurativo', tipo: 'Movilidad', nivel: 'Principiante', dia: 'Martes', hora: '08:00', entrenador: 'Ana Rivas', cupo: 18, inscritos: 9 },
  { id: 4, nombre: 'HIIT 45', tipo: 'Funcional', nivel: 'Avanzado', dia: 'Miércoles', hora: '19:00', entrenador: 'Luis Barrera', cupo: 16, inscritos: 12 },
  { id: 5, nombre: 'Fuerza total', tipo: 'Fuerza', nivel: 'Principiante', dia: 'Jueves', hora: '07:00', entrenador: 'Mariana Ortiz', cupo: 20, inscritos: 6 },
  { id: 6, nombre: 'Spinning', tipo: 'Cardio', nivel: 'Intermedio', dia: 'Viernes', hora: '18:30', entrenador: 'Carlos Medina', cupo: 15, inscritos: 10 },
];
