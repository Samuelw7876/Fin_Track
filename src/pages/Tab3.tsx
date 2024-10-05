import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListaMensajesPage from '../components/ListaMensajes';
import Mensajes from '../data/Mensajes';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListaMensajesPage mensajes={Mensajes} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
