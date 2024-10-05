export interface Message {
  id: number;
  fromName: string;
  subject: string;
  fecha: string;
  priority: 'high' | 'medium' | 'low';  // Campo de prioridad agregado
}

const messages: Message[] = [
  {
    id: 0, fromName: 'Fernando Herrera',
    subject: 'Actualización de software del sistema operativo',
    fecha: '23:59 PM', priority: 'high',
  },
  {
    id: 1,
    fromName: 'Samuel Catrileo :)',
    subject: 'Intento de Entrega de la App',
    fecha: '23:59 PM',
    priority: 'medium',
  },
  {
    id: 2,
    fromName: 'Carlos Morales',
    subject: 'Solicitud de soporte técnico para errores de red',
    fecha: '4:00 AM',
    priority: 'low',
  },
  {
    id: 3,
    fromName: 'Luis Martínez',
    subject: 'Implementación de nuevas políticas de ciberseguridad',
    fecha: 'Ayer',
    priority: 'high',
  },
  {
    id: 4,
    fromName: 'Diego Jiménez',
    subject: 'Solicitud de ayuda con la instalación de bases de datos',
    fecha: 'Hace 3 días',
    priority: 'medium',
  },
];

// Función para obtener un mensaje por ID
export function getMessage(id: number): Message | undefined {
  return messages.find((message) => message.id === id);
}

export default messages;
