
import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';



export const appRoutes: Routes = [{
  path: '', component: LandingPageComponent}, {
  path: 'login', component: LoginComponent
}];

