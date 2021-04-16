import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ActualRouteKeeperService } from '../service/actual-route-keeper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actualRoute = '/home';
  actualLanguage = 'Deutsch';
  subscription: Subscription;

  constructor(private translateService: TranslateService, private router: Router, private actualRouteKeeperService: ActualRouteKeeperService) {
    translateService.setDefaultLang('de');
  }

  /**
   * Swittches the language.
   * @param language the language to set
   */
  switchLanguage(language: string) {
    this.translateService.use(language);
    this.updateActualRoute();
    this.selectTheLanguageToPrint(language);
  }

  updateActualRoute() {
    this.subscription = this.actualRouteKeeperService.actualRouteObservable.subscribe(route => this.actualRoute = route);
  }

  /**
   * Selects the language to print.
   * @param language the language to set
   */
  selectTheLanguageToPrint(language: string) {
    switch (language) {
      case 'en': {
        this.actualLanguage = 'English';
        break;
      }
      case 'fr': {
        this.actualLanguage = 'Français';
        break;
      }
      case 'de': {
        this.actualLanguage = 'Deutsch';
        break;
      }
    }
  }

  ngOnInit() {
    this.updateActualRoute();
  }

  setActualRoute(actualRoute: string) {
    this.actualRouteKeeperService.changeRoute(actualRoute);
    this.actualRoute = actualRoute;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

