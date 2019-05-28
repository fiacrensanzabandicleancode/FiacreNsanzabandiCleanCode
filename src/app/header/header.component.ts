import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actualRouteto : string = "/home";

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('de');
  }

  /**
   * Swittches the language.
   * @param language
   */
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  
  ngOnInit() {
  }

  /**
   * Sets the actual root.
   * @param actualRoute
   */
  setActualRoute(actualRoutete: string) {
    this.actualRouteto = actualRoutete;
  }
}
