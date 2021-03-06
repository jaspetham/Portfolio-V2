import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path:'',component:HeaderComponent,
    children:[
      {
        path:'', redirectTo:'home',pathMatch:'full'
      },
      {
        path:'home',component:HomeComponent
      },
      {
        path: 'profile', component:ProfileComponent
      },
      {
        path: 'works', component:WorksComponent
      },
      {
        path: 'contact', component:ContactComponent
      },
      {
        path:'**', component:HomeComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash:true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
