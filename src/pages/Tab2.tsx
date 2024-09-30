import { IonList, IonItem, IonLabel, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Tab2.css';
import { cashOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Transacciones</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className="listaTarjetas">
          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta de Crédito</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 6473</p>
              <p>Saldo Disponible: $5.500.000</p>
            </IonCardContent>
          </IonCard>

          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta USD</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 8315</p>
              <p>Saldo Disponible: $2.500</p>
            </IonCardContent>
          </IonCard>

          <IonCard className="tarjeta">
            <IonCardHeader>
              <IonCardTitle>Tarjeta EUR</IonCardTitle>
              <IonCardSubtitle>Banco XXX</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>**** **** **** 9764</p>
              <p>Saldo Disponible: €4.280</p>
            </IonCardContent>
          </IonCard>
        </IonList>

        {/* Lista de transacciones */}
        <IonList className="listaTransaciones">
        <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>27 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>26 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>22 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>18 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>12 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>10 / 09 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>30 / 07 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>25 / 07 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>16 / 07 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>08 / 07 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
          <IonItem className="transacion">
            <IonIcon icon={cashOutline} slot="start" />
            <IonLabel>
              <h2>Depósito</h2> 
              <p>02 / 06 / 2024</p>
              <p>$600.000</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
