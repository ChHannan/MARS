import {Routes} from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';

import {LoginComponent} from './login/login.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import {PatientComponent} from './patient/patient.component';

import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {SearchPatientComponent} from './patient/search-patient/search-patient.component';
import {ViewPatientComponent} from './patient/view-patient/view-patient.component';
import {ProfileComponent} from './profile/profile.component';
import {EmployeeComponent} from './employee/employee.component';
import {PrescriptionComponent} from './prescription/prescription.component';
import {MedicalHistoryComponent} from './medical-history/medical-history.component';
import {AllergyComponent} from './allergy/allergy.component';
import {VisitsComponent} from './visits/visits.component';


export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'patient', component: PatientComponent, children: [
          {path: '', redirectTo: 'search', pathMatch: 'full'},
          {path: 'search', component: SearchPatientComponent},
          {path: 'add', component: AddPatientComponent},
          {path: ':patient_id', component: ViewPatientComponent}
        ]
      },
      {path: 'profile', component: ProfileComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'prescription', component: PrescriptionComponent},
      {path: 'medical-history', component: MedicalHistoryComponent},
      {path: 'allergy', component: AllergyComponent},
      {path: 'visits', component: VisitsComponent},
    ]
  }
];
