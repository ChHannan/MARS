import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {DialogMedicalHistoryComponent} from './dialog-medical-history/dialog-medical-history.component';
import {DialogPrescriptionComponent} from './dialog-prescription/dialog-prescription.component';
import {DialogAllergyComponent} from './dialog-allergy/dialog-allergy.component';
import {DialogVisitsComponent} from './dialog-visits/dialog-visits.component';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})

export class ViewPatientComponent implements OnInit {

  medicalHistory = [
    {type: 'Disease', description: 'Cancer Disease', time: '1 year ago'},
    {type: 'Disease', description: 'Heart', time: '1 year ago'},
    {type: 'Surgery', description: 'Heart Surgery', time: '6 months ago'},
    {type: 'Disease', description: 'Liver Disease', time: '1 year ago'},

  ];
  prescription = [
    {serialNo: 1, medicine: 'Panadol', dose: '100mg', frequency: 'Every Morning'},
    {serialNo: 2, medicine: 'Rozerem', dose: '100mg', frequency: 'At bed'},
    {serialNo: 3, medicine: 'Restoril', dose: '100mg', frequency: '2x a day'},
    {serialNo: 4, medicine: 'Halcion', dose: '100mg', frequency: '3x a day'},
    {serialNo: 5, medicine: 'Sonata', dose: '100mg', frequency: 'Every Morning'},
  ];
  allergies = [
    {serialNo: 1, name: 'Acne', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'},
    {serialNo: 2, name: 'Food Allergy', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'},
    {serialNo: 3, name: 'Insect Sting', description: 'Allergic to medicines containing benzoyl peroxide or salicylic acid'}
  ];

  displayedColumnsPrescriptions: string[] = ['serialNo', 'medicine', 'dose', 'frequency'];
  presciptionDataSource = new MatTableDataSource(this.prescription);
  allergiesDataSource = new MatTableDataSource(this.allergies);
  displayedColumnsAllergy: string[] = ['serialNo', 'name', 'description'];
  medicalHistoryDataSource = new MatTableDataSource((this.medicalHistory));
  displayedColumnsMedicalHistory: string[] = ['type', 'description', 'time'];

  patient = {};
  openMedicalHistoryDialog() {
    this.dialog.open(DialogMedicalHistoryComponent);
  }
  openPrescriptionDialog() {
    this.dialog.open(DialogPrescriptionComponent);
  }
  openAllergyDialog() {
    this.dialog.open(DialogAllergyComponent);
  }
  openVisitDialog() {
    this.dialog.open(DialogVisitsComponent);
  }
  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.patient = this.patientsService.patients.find(element => element.name === params.patient_id);
      if (this.patient === undefined) {
        this.router.navigate([
          'dashboard', 'patient', 'search'
        ]).then();
      }
    });
  }
}
