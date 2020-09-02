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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
