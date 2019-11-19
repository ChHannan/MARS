import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {MaterialModule} from './material/material.module';

import {appRoutes} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientComponent} from './patient/patient.component';
import {NurseComponent} from './nurse/nurse.component';
import {AdminComponent} from './admin/admin.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import { SearchPatientComponent } from './patient/search-patient/search-patient.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    PatientComponent,
    NurseComponent,
    AdminComponent,
    PharmacyComponent,
    SearchPatientComponent,
    AddPatientComponent,
    PatientListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
