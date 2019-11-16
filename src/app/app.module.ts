import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {MaterialModule} from './material/material.module';

import {appRoutes} from './app-routing.module';
import {patientRoutes} from './patient/patient-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

import { PatientComponent } from './patient/patient.component';
import { SearchComponent } from './patient/search/search.component';
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    PatientComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(patientRoutes),
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
