import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {DialogMedicalHistoryComponent} from './dialog-medical-history/dialog-medical-history.component';
import {DialogPrescriptionComponent} from './dialog-prescription/dialog-prescription.component';
import {DialogAllergyComponent} from './dialog-allergy/dialog-allergy.component';
import {DialogVisitsComponent} from './dialog-visits/dialog-visits.component';
import {DialogEditMedHistComponent} from './dialog-edit-med-hist/dialog-edit-med-hist.component';
import {DialogEditPresComponent} from './dialog-edit-pres/dialog-edit-pres.component';
import {DialogEditAllergiesComponent} from './dialog-edit-allergies/dialog-edit-allergies.component';
import {DialogEditVisitsComponent} from './dialog-edit-visits/dialog-edit-visits.component';
import {ApiService} from '../../services/api/api.service';
import * as interfaces from '../../services/interfaces';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})

export class ViewPatientComponent implements OnInit {

  medicalHistory: interfaces.MedicalHistory[] = [];
  medicalHistoryDataSource = new MatTableDataSource((this.medicalHistory));
  displayedColumnsMedicalHistory: string[] = ['type', 'description', 'time'];
  prescription: interfaces.Prescription[] = [];
  displayedColumnsPrescriptions: string[] = ['serialNo', 'medicine', 'dose', 'frequency'];
  prescriptionDataSource = new MatTableDataSource(this.prescription);
  allergies: interfaces.Allergy[] = [];
  allergiesDataSource = new MatTableDataSource(this.allergies);
  displayedColumnsAllergy: string[] = ['serialNo', 'name', 'description'];
  visits: interfaces.Visit[] = [];

  patient = {
    id: '',
  };

  openMedicalHistoryDialog() {
    this.dialog.open(DialogMedicalHistoryComponent);
  }

  editMedicalHistory() {
    this.dialog.open(DialogEditMedHistComponent);
  }

  openPrescriptionDialog() {
    this.dialog.open(DialogPrescriptionComponent);
  }

  editPrescription() {
    this.dialog.open(DialogEditPresComponent);
  }

  openAllergyDialog() {
    this.dialog.open(DialogAllergyComponent);
  }

  editAllergies() {
    this.dialog.open(DialogEditAllergiesComponent);
  }

  openVisitDialog() {
    this.dialog.open(DialogVisitsComponent);
  }

  editVisits() {
    this.dialog.open(DialogEditVisitsComponent);
  }

  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute,
              private dialog: MatDialog, private apiService: ApiService) {
    this.dialog.afterAllClosed.subscribe(res => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientsService.load();
      this.patient = this.patientsService.patients.find(element => element.id === params.patient_id);
      this.patientsService.current = this.patient;
      if (this.patient === undefined) {
        this.router.navigate([
          'dashboard', 'patient', 'search'
        ]).then();
      } else {
        this.apiService.getMedicalHistory(this.patient.id).subscribe(res => {
          this.medicalHistory = res;
          this.medicalHistoryDataSource = new MatTableDataSource((this.medicalHistory));
        }, error => console.log(error));
        this.apiService.getAllergy(this.patient.id).subscribe(res => {
          this.allergies = res;
          this.allergiesDataSource = new MatTableDataSource(this.allergies);
        }, error => console.log(error));
        this.apiService.getPrescription(this.patient.id).subscribe(res => {
          this.prescription = res;
          this.prescriptionDataSource = new MatTableDataSource(this.prescription);
        }, error => console.log(error));
        this.apiService.getVisit(this.patient.id).subscribe(res => {
          this.visits = res;
        }, error => console.log(error));
      }
    });
  }
}
