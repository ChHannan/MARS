import {Routes} from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';

import {LoginComponent} from './login/login.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import {PatientComponent} from './patient/patient.component';
import {NurseComponent} from './nurse/nurse.component';
import {AdminComponent} from './admin/admin.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';

import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {SearchPatientComponent} from './patient/search-patient/search-patient.component';
import {ViewPatientComponent} from "./patient/view-patient/view-patient.component";


export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'patient', pathMatch: 'full'},
      {path: 'patient', component: PatientComponent, children: [
          {path: '', redirectTo: 'search', pathMatch: 'full'},
          {path: 'search', component: SearchPatientComponent},
          {path: 'add', component: AddPatientComponent},
          {path: ':patient_id', component: ViewPatientComponent}
        ]
      },
      {path: 'nurse', component: NurseComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'pharmacy', component: PharmacyComponent}
    ]
  }
];
