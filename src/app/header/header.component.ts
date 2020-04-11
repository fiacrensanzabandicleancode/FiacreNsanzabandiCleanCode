import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actualRoute = '/home';
  actualLanguage = 'Deutsch';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('de');
  }

  /**
   * Swittches the language.
   * @param language the language to set
   */
  switchLanguage(language: string) {
    this.translateService.use(language);
    this.selectTheLanguageToPrint(language);
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
  }

  /**
   * Sets the actual root.
   * @param actualRoute the actual root
   */
  setActualRoute(actualRoute: string) {
    this.actualRoute = actualRoute;
  }
}
