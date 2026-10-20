// Configuración de las pantallas de administración (solo datos de ejemplo).
export interface Columna { key: string; label: string; }
export interface Campo { label: string; tipo: 'text' | 'number' | 'date' | 'time' | 'select'; opciones?: string[]; }
export interface AdminConfig {
  titulo: string;
  nuevo: string;          // texto del botón "Nuevo ..."
  buscar: string;         // placeholder del buscador
  columnas: Columna[];
  filas: Record<string, string>[];
  campos: Campo[];
}

export const ADMIN_CONFIG: Record<string, AdminConfig> = {
  usuarios: {
    titulo: 'Usuarios', nuevo: 'Nuevo usuario', buscar: 'Buscar por nombre o correo',
    columnas: [{ key: 'nombre', label: 'Nombre' }, { key: 'correo', label: 'Correo' }, { key: 'rol', label: 'Rol' }, { key: 'registro', label: 'Registro' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { nombre: 'Eduardo Hernández', correo: 'eduardo@ejemplo.com', rol: 'Usuario', registro: '14 ago 2026', estado: 'Activo' },
      { nombre: 'Valeria Soto', correo: 'valeria@ejemplo.com', rol: 'Usuario', registro: '02 sep 2026', estado: 'Activo' },
      { nombre: 'Jorge Palacios', correo: 'jorge@ejemplo.com', rol: 'Usuario', registro: '20 jul 2026', estado: 'Inactivo' },
      { nombre: 'Admin Forja', correo: 'admin@forja.mx', rol: 'Administrador', registro: '01 ene 2026', estado: 'Activo' },
    ],
    campos: [{ label: 'Nombre', tipo: 'text' }, { label: 'Apellidos', tipo: 'text' }, { label: 'Correo electrónico', tipo: 'text' }, { label: 'Rol', tipo: 'select', opciones: ['Usuario', 'Administrador'] }, { label: 'Estado', tipo: 'select', opciones: ['Activo', 'Inactivo'] }],
  },
  planes: {
    titulo: 'Planes', nuevo: 'Nuevo plan', buscar: 'Buscar plan',
    columnas: [{ key: 'nombre', label: 'Plan' }, { key: 'precio', label: 'Precio' }, { key: 'duracion', label: 'Duración' }, { key: 'clases', label: 'Clases por semana' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { nombre: 'Básico', precio: '$399', duracion: '1 mes', clases: '0', estado: 'Activo' },
      { nombre: 'Plus', precio: '$599', duracion: '1 mes', clases: '3', estado: 'Activo' },
      { nombre: 'Anual', precio: '$5,990', duracion: '12 meses', clases: 'Ilimitadas', estado: 'Activo' },
    ],
    campos: [{ label: 'Nombre del plan', tipo: 'text' }, { label: 'Precio', tipo: 'number' }, { label: 'Duración (meses)', tipo: 'number' }, { label: 'Clases por semana', tipo: 'number' }, { label: 'Estado', tipo: 'select', opciones: ['Activo', 'Inactivo'] }],
  },
  membresias: {
    titulo: 'Membresías', nuevo: 'Registrar membresía', buscar: 'Buscar por usuario',
    columnas: [{ key: 'usuario', label: 'Usuario' }, { key: 'plan', label: 'Plan' }, { key: 'inicio', label: 'Inicio' }, { key: 'vence', label: 'Vence' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { usuario: 'Eduardo Hernández', plan: 'Plus', inicio: '01 oct 2026', vence: '31 oct 2026', estado: 'Activa' },
      { usuario: 'Valeria Soto', plan: 'Anual', inicio: '02 sep 2026', vence: '01 sep 2027', estado: 'Activa' },
      { usuario: 'Jorge Palacios', plan: 'Básico', inicio: '20 jul 2026', vence: '19 ago 2026', estado: 'Vencida' },
      { usuario: 'Marco Díaz', plan: 'Plus', inicio: '25 sep 2026', vence: '24 oct 2026', estado: 'Por vencer' },
    ],
    campos: [{ label: 'Usuario', tipo: 'text' }, { label: 'Plan', tipo: 'select', opciones: ['Básico', 'Plus', 'Anual'] }, { label: 'Fecha de inicio', tipo: 'date' }, { label: 'Estado', tipo: 'select', opciones: ['Activa', 'Por vencer', 'Vencida', 'Cancelada'] }],
  },
  entrenadores: {
    titulo: 'Entrenadores', nuevo: 'Nuevo entrenador', buscar: 'Buscar entrenador',
    columnas: [{ key: 'nombre', label: 'Nombre' }, { key: 'especialidad', label: 'Especialidad' }, { key: 'telefono', label: 'Teléfono' }, { key: 'clases', label: 'Clases asignadas' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { nombre: 'Mariana Ortiz', especialidad: 'Fuerza', telefono: '444 111 2233', clases: '8', estado: 'Activo' },
      { nombre: 'Carlos Medina', especialidad: 'Cardio', telefono: '444 222 3344', clases: '6', estado: 'Activo' },
      { nombre: 'Ana Rivas', especialidad: 'Movilidad', telefono: '444 333 4455', clases: '5', estado: 'Activo' },
      { nombre: 'Luis Barrera', especialidad: 'Funcional', telefono: '444 444 5566', clases: '4', estado: 'Inactivo' },
    ],
    campos: [{ label: 'Nombre completo', tipo: 'text' }, { label: 'Especialidad', tipo: 'select', opciones: ['Fuerza', 'Cardio', 'Movilidad', 'Funcional'] }, { label: 'Teléfono', tipo: 'text' }, { label: 'Años de experiencia', tipo: 'number' }, { label: 'Estado', tipo: 'select', opciones: ['Activo', 'Inactivo'] }],
  },
  clases: {
    titulo: 'Clases', nuevo: 'Nueva clase', buscar: 'Buscar clase',
    columnas: [{ key: 'nombre', label: 'Clase' }, { key: 'tipo', label: 'Tipo' }, { key: 'nivel', label: 'Nivel' }, { key: 'horario', label: 'Horario' }, { key: 'entrenador', label: 'Entrenador' }, { key: 'cupo', label: 'Cupo' }],
    filas: [
      { nombre: 'Fuerza total', tipo: 'Fuerza', nivel: 'Intermedio', horario: 'Lun 07:00', entrenador: 'Mariana Ortiz', cupo: '14 / 20' },
      { nombre: 'Spinning', tipo: 'Cardio', nivel: 'Todos', horario: 'Lun 18:30', entrenador: 'Carlos Medina', cupo: '15 / 15' },
      { nombre: 'Yoga restaurativo', tipo: 'Movilidad', nivel: 'Principiante', horario: 'Mar 08:00', entrenador: 'Ana Rivas', cupo: '9 / 18' },
      { nombre: 'HIIT 45', tipo: 'Funcional', nivel: 'Avanzado', horario: 'Mié 19:00', entrenador: 'Luis Barrera', cupo: '12 / 16' },
    ],
    campos: [{ label: 'Nombre de la clase', tipo: 'text' }, { label: 'Tipo', tipo: 'select', opciones: ['Fuerza', 'Cardio', 'Movilidad', 'Funcional'] }, { label: 'Nivel', tipo: 'select', opciones: ['Principiante', 'Intermedio', 'Avanzado', 'Todos'] }, { label: 'Día', tipo: 'select', opciones: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] }, { label: 'Hora', tipo: 'time' }, { label: 'Entrenador asignado', tipo: 'select', opciones: ['Mariana Ortiz', 'Carlos Medina', 'Ana Rivas', 'Luis Barrera'] }, { label: 'Cupo máximo', tipo: 'number' }],
  },
  inscripciones: {
    titulo: 'Inscripciones', nuevo: 'Inscribir usuario', buscar: 'Buscar por usuario o clase',
    columnas: [{ key: 'usuario', label: 'Usuario' }, { key: 'clase', label: 'Clase' }, { key: 'fecha', label: 'Fecha de clase' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { usuario: 'Eduardo Hernández', clase: 'HIIT 45', fecha: '21 oct 2026', estado: 'Inscrito' },
      { usuario: 'Valeria Soto', clase: 'Spinning', fecha: '19 oct 2026', estado: 'Inscrito' },
      { usuario: 'Marco Díaz', clase: 'Spinning', fecha: '19 oct 2026', estado: 'Cancelada' },
      { usuario: 'Eduardo Hernández', clase: 'Spinning', fecha: '12 oct 2026', estado: 'Asistió' },
    ],
    campos: [{ label: 'Usuario', tipo: 'text' }, { label: 'Clase', tipo: 'select', opciones: ['Fuerza total', 'Spinning', 'Yoga restaurativo', 'HIIT 45'] }, { label: 'Fecha de la clase', tipo: 'date' }],
  },
  pagos: {
    titulo: 'Pagos', nuevo: 'Registrar pago', buscar: 'Buscar por folio o usuario',
    columnas: [{ key: 'folio', label: 'Folio' }, { key: 'usuario', label: 'Usuario' }, { key: 'membresia', label: 'Membresía' }, { key: 'fecha', label: 'Fecha' }, { key: 'monto', label: 'Monto' }, { key: 'estado', label: 'Estado' }],
    filas: [
      { folio: 'P-0142', usuario: 'Eduardo Hernández', membresia: 'Plus · oct', fecha: '01 oct 2026', monto: '$599', estado: 'Pagado' },
      { folio: 'P-0141', usuario: 'Marco Díaz', membresia: 'Plus · sep', fecha: '25 sep 2026', monto: '$599', estado: 'Pagado' },
      { folio: 'P-0140', usuario: 'Valeria Soto', membresia: 'Anual', fecha: '02 sep 2026', monto: '$5,990', estado: 'Pagado' },
      { folio: 'P-0139', usuario: 'Jorge Palacios', membresia: 'Básico · ago', fecha: '20 jul 2026', monto: '$399', estado: 'Pendiente' },
    ],
    campos: [{ label: 'Usuario', tipo: 'text' }, { label: 'Membresía', tipo: 'text' }, { label: 'Monto', tipo: 'number' }, { label: 'Método de pago', tipo: 'select', opciones: ['Efectivo', 'Tarjeta', 'Transferencia'] }, { label: 'Estado', tipo: 'select', opciones: ['Pagado', 'Pendiente', 'Rechazado'] }],
  },
};
