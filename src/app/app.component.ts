import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackCircleOutline,
  arrowForwardCircleOutline,
  cartOutline,
  chevronBackOutline,
  chevronForwardOutline,
  gridOutline,
  homeOutline,
  keyOutline,
  listOutline,
  personCircleOutline,
  searchOutline,
  starOutline,
  storefrontOutline,
  trashOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  constructor() {
    addIcons({
      arrowBackCircleOutline,
      arrowForwardCircleOutline,
      cartOutline,
      chevronBackOutline,
      chevronForwardOutline,
      gridOutline,
      homeOutline,
      keyOutline,
      listOutline,
      personCircleOutline,
      searchOutline,
      starOutline,
      storefrontOutline,
      trashOutline
    });
  }
}
