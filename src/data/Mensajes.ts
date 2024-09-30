export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
}

const Mensaje: Message[] = [
  {
    fromName: 'Fernando Herrera',
    subject: 'Actualización de software del sistema operativo',
    date: '23:59 PM',
    id: 0
  },
  {
    fromName: 'Samuel Catrileo :)',
    subject: 'Intento de Entrega de la App',
    date: '23:59 PM',
    id: 1
  },
  {
    fromName: 'Carlos Morales',
    subject: 'Solicitud de soporte técnico para errores de re',
    date: '4:00 AM',
    id: 2

  },
  {
    fromName: 'Luis Martínez',
    subject: 'Implementación de nuevas políticas de ciberseguridad',
    date: 'Ayer',
    id: 3
  },
  {
    fromName: 'Diego Jiménez',
    subject: 'Implementación de nuevas políticas de ciberseguridad',
    date: 'Ayer',
    id: 4
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Implementación de nuevas políticas de ciberseguridad',
    date: 'Hace 3 dias',
    id: 5
  },
  {
    fromName: 'Andrea Delgado',
    subject: 'ect',
    date: 'Hace 4 dias',
    id: 6
  },
  {
    fromName: 'Roberto Castillo',
    subject: 'Solicitud de ayuda en la instalación de bases de datos MySQL',
    date: 'Hcae 6 dias',
    id: 7
  },
  {
    fromName: 'Verónica Reyes',
    subject: 'Solicitud de ayuda en la instalación de bases de datos MySQL',
    date: 'Hcae 6 dias',
    id: 8
  },
  {
    fromName: 'Roberto Castillo',
    subject: 'Solicitud de ayuda en la instalación de bases de datos MySQL',
    date: 'Semana Pasada',
    id: 9
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Solicitud de ayuda en la instalación de bases de datos MySQL',
    date: 'Semana Pasada',
    id: 10
  },
  {
    fromName: 'Lucía Castro',
    subject: 'No queria seguir',
    date: 'Semana Pasada',
    id: 11
  },
  {
    fromName: 'Héctor Muñoz',
    subject: 'Solicitud de ayuda en la instalación de bases de datos MySQL',
    date: 'Mes Pasado',
    id: 12
  }
];

export const getMessages = () => Mensaje;

export const getMessage = (id: number) => Mensaje.find(m => m.id === id);
