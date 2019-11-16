import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';

import {PatientComponent} from './patient/patient.component';
import {SearchPatientComponent} from './patient/search-patient/search-patient.component';
import {AddPatientComponent} from './patient/add-patient/add-patient.component';

export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'patient', component: PatientComponent, children: [
      {path: '', component: SearchPatientComponent, outlet: 'patient'},
      {path: 'search', component: SearchPatientComponent, outlet: 'patient'},
      {path: 'add', component: AddPatientComponent, outlet: 'patient'},
    ]},
];

