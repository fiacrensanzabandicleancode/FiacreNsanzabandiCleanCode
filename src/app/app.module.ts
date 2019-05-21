import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const appRoutes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'cv' , component: CvComponent},
  { path: 'personalProjects' , component: PersonalProjectsComponent},
  { path: 'hobbies' , component: HobbiesComponent}
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CvComponent,
    PersonalProjectsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

