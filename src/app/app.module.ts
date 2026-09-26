import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'cv' , component: CvComponent },
  { path: 'hobbies' , component: HobbiesComponent },
  { path: '**' , component: HomeComponent }
];

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CvComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FontAwesomeModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {

}

