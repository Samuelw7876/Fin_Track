import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput type="email" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput type="password" required />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top">Iniciar Sesión</IonButton>
        <IonButton fill="clear" expand="block" routerLink="/register">¿No tienes cuenta? Regístrate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
