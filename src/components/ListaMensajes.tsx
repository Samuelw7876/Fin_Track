import {
  IonItem,
  IonLabel,
  IonNote,
  IonChip,
  IonInput,
  IonSearchbar,
} from '@ionic/react';
import { useState } from 'react';
import { Message } from '../data/Mensajes';
import './ListaMensajes.css';

interface MessageListItemProps {
  Mensaje: Message;
}

const ListaMensajes: React.FC<MessageListItemProps> = ({ Mensaje }) => {
  return (
    <IonItem className="listaMensajes" routerLink={`/message/${Mensaje.id}`} detail={false}>
      <div slot="start" className="viñeta"></div>
      <IonLabel className="subListaMensajes">
        <h2>
          {Mensaje.fromName}
          <span className="fecha">
            <IonNote>{Mensaje.fecha}</IonNote>
          </span>
        </h2>
        <h3>{Mensaje.subject}</h3>
      </IonLabel>
    </IonItem>
  );
};

const ListaMensajesPage: React.FC<{ mensajes: Message[] }> = ({ mensajes }) => {
  const [searchText, setSearchText] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  const filteredMessages = mensajes.filter((message) => {
    const matchesSearch = message.subject.toLowerCase().includes(searchText.toLowerCase());
    const matchesPriority =
      priorityFilter === 'all' || message.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div>
      {/* Su barrita de Busqueda que aun le falta  que funcione, me quede corto de tiempo :(*/}
      <IonSearchbar
        value={searchText}
        onIonInput={(e) => setSearchText(e.detail.value!)}
        placeholder="Buscar mensajes, Nombres, archivos...."
      ></IonSearchbar>

      {/* Priority filters */}
      <div className="priority-filters">
        <IonChip
          onClick={() => setPriorityFilter('all')}
          outline={priorityFilter !== 'all'}
        >
          Todos
        </IonChip>
        <IonChip
          onClick={() => setPriorityFilter('high')}
          outline={priorityFilter !== 'high'}
        >
          Prioridad Alta 
        </IonChip>
        <IonChip
          onClick={() => setPriorityFilter('medium')}
          outline={priorityFilter !== 'medium'}
        >
          Prioridad Media
        </IonChip>
        <IonChip
          onClick={() => setPriorityFilter('low')}
          outline={priorityFilter !== 'low'}
        >
          Prioridad Baja
        </IonChip>
      </div>

      {/* Message list */}
      {filteredMessages.map((mensaje) => (
        <ListaMensajes key={mensaje.id} Mensaje={mensaje} />
      ))}
    </div>
  );
};

export default ListaMensajesPage;
