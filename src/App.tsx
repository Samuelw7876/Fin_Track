import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact                         
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';
import Cuenta from './pages/Cuenta';
import ViewMessage from './pages/VistaMensajes';
import CambiarContraseña from './pages/CambiarContraseña';
import AcercaNosotros from './pages/AcercaNosotros'; 
import AcercaApp from './pages/AcercaApp';



import './theme/variables.css';
import { homeSharp, walletSharp, notificationsSharp, personCircleSharp} from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu /> 
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/soporte">
            <Soporte />
          </Route>
          <Route exact path="/configuracion">
            <Configuracion />
          </Route>
          <Route exact path="/cuenta">
            <Cuenta />
          </Route>
          <Route exact path="/message/:id">
           <ViewMessage />
        </Route>
        <Route exact path="/acerca-nosotros">
            <AcercaNosotros />
          </Route>
          <Route exact path="/acerca-app">
            <AcercaApp />
          </Route>
        <Route exact path="/cambiar-contraseña">
          <CambiarContraseña />
        </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={homeSharp} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={walletSharp} />
            <IonLabel>Movimientos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={notificationsSharp} />
            <IonLabel>Notificaiones</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
          <IonIcon icon={personCircleSharp} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
