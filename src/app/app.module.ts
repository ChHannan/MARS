import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {appRoutes} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PatientComponent} from './patient/patient.component';
import {SearchPatientComponent} from './patient/search-patient/search-patient.component';
import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {ViewPatientComponent} from './patient/view-patient/view-patient.component';
import {ProfileComponent} from './profile/profile.component';
import {EmployeeComponent} from './employee/employee.component';
import {PrescriptionComponent} from './prescription/prescription.component';
import {MedicalHistoryComponent} from './medical-history/medical-history.component';
import {DialogMedicalHistoryComponent} from './patient/view-patient/dialog-medical-history/dialog-medical-history.component';
import {DialogPrescriptionComponent} from './patient/view-patient/dialog-prescription/dialog-prescription.component';
import {DialogAllergyComponent} from './patient/view-patient/dialog-allergy/dialog-allergy.component';
import {DialogVisitsComponent} from './patient/view-patient/dialog-visits/dialog-visits.component';
import {MatRadioModule, MatStepperModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {AllergyComponent} from './allergy/allergy.component';
import {VisitsComponent} from './visits/visits.component';
import {DialogEditMedHistComponent} from './patient/view-patient/dialog-edit-med-hist/dialog-edit-med-hist.component';
import {DialogEditAllergiesComponent} from './patient/view-patient/dialog-edit-allergies/dialog-edit-allergies.component';
import {DialogEditVisitsComponent} from './patient/view-patient/dialog-edit-visits/dialog-edit-visits.component';
import {DialogEditPresComponent} from './patient/view-patient/dialog-edit-pres/dialog-edit-pres.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    PatientComponent,
    SearchPatientComponent,
    AddPatientComponent,
    ProfileComponent,
    ViewPatientComponent,
    EmployeeComponent,
    PrescriptionComponent,
    MedicalHistoryComponent,
    DialogMedicalHistoryComponent,
    DialogPrescriptionComponent,
    DialogAllergyComponent,
    DialogVisitsComponent,
    AllergyComponent,
    VisitsComponent,
    DialogEditMedHistComponent,
    DialogEditAllergiesComponent,
    DialogEditVisitsComponent,
    DialogEditPresComponent,
  ],
  entryComponents: [
    DialogMedicalHistoryComponent,
    DialogPrescriptionComponent,
    DialogAllergyComponent,
    DialogVisitsComponent,
    DialogEditMedHistComponent,
    DialogEditPresComponent,
    DialogEditAllergiesComponent,
    DialogEditVisitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatStepperModule,
    MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
