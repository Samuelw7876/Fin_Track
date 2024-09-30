import { useState } from 'react';
import { Message, getMessage } from '../data/Mensajes';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './VistaMensajes.css';

function VistaMensaje() {
  const [Mensaje, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/Tab3"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {Mensaje ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {Mensaje.fromName}
                  <span className="date">
                    <IonNote>{Mensaje.date}</IonNote>
                  </span>
                </h2>
                <h3>
                  De: <IonNote>YO</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{Mensaje.subject}</h1>
              <p>
              Hola Profe, como esta?. Espero este bien le comento que saque 
              algunas cosas que las hace el ionic al crearlo por primera vez de ciertas 
              opciones, ademas que hace la animacion de recargar la pagina si con mouse desde 
              arriba hacia abjo como cuando uno quiere recargar la pagina, no esta mal.
              Pero no pude hacer lo que en teoria seria lo que mas caracteriza la app de Fin Track 
              Muchas Gracias.
              </p>
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default VistaMensaje;
