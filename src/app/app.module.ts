import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';

import {appRoutes} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientComponent} from './patient/patient.component';
import {SearchPatientComponent} from './patient/search-patient/search-patient.component';
import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {ViewPatientComponent} from './patient/view-patient/view-patient.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    PatientComponent,
    SearchPatientComponent,
    AddPatientComponent,
    ViewPatientComponent,
    ProfileComponent,
    EmployeeComponent,
    PrescriptionComponent,
    MedicalHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
