import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';
import {PatientComponent} from './patient/patient.component';

export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'patient', component: PatientComponent}
];

