import MessageListItem from '../components/ListaMensajes';
import { useState } from 'react';
import { Message, getMessages } from '../data/Mensajes';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {

  const [Mensaje, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Bandeja De Entrada
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {Mensaje.map(m => <MessageListItem key={m.id} Mensaje={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
