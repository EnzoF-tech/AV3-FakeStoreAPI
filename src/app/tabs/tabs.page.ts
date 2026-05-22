import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  standalone: true,
  imports: [IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage {
  currentUrl = '';

  constructor(private readonly router: Router) {
    this.currentUrl = this.router.url;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  navigate(url: string): void {
    if (this.currentUrl !== url) {
      this.router.navigateByUrl(url, { replaceUrl: true });
    }
  }

  isActive(url: string): boolean {
    return this.currentUrl.startsWith(url);
  }
}
