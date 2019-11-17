import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientComponent} from './patient/patient.component';
import {NurseComponent} from './nurse/nurse.component';
import {AdminComponent} from './admin/admin.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';


export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'patient', pathMatch: 'full'},
      {path: 'patient', component: PatientComponent},
      {path: 'nurse', component: NurseComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'pharmacy', component: PharmacyComponent}
    ]
  }
];
