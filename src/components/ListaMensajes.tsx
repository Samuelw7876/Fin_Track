import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/Mensajes';
import './ListaMensajes.css';

interface MessageListItemProps {
  Mensaje: Message;
}

const ListaMensajes: React.FC<MessageListItemProps> = ({ Mensaje }) => {
  return (
    <IonItem className="listaMensajes" routerLink={`/message/${Mensaje.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {Mensaje.fromName}
          <span className="date">
            <IonNote>{Mensaje.date}</IonNote>
          </span>
        </h2>
        <h3>{Mensaje.subject}</h3>
        <p>
          Hola Profe, como esta?. Espero este bien le comento que saque algunas cosas que las hace el ionic al crearlo por primera vez de ciertas opciones, ademas que hace la animacion de recargar la pagina si con mouse desde arriba hacia abjo como cuando uno quiere recargar la pagina, no esta mal. Muchas Gracias. ;as_:[)))==))]
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default ListaMensajes;
