import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot(routes,{useHash:true}),
    FontAwesomeModule,

    NgCircleProgressModule.forRoot({
      // set defaults here
      "unitsColor": "#FFFFFF",
      "outerStrokeWidth": 10,
      "backgroundPadding": -9,
      "outerStrokeColor": "#ffb400",
      "innerStrokeColor": "#2f2f2f",
      "innerStrokeWidth": 10,
      "showSubtitle": false,
      "showInnerStroke": true,
      "startFromZero": false,
      "space": -10,
      "titleFontSize": "36",
      "titleColor": "#FFFFFF",
      "unitsFontSize":"20",
      "responsive": true,
      "class": "circle-percent"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
