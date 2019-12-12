import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})

export class ViewPatientComponent implements OnInit {
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
  displayedColumns: string[] = ['serialNo', 'medicine', 'dose', 'frequency'];
  presciptionDataSource = new MatTableDataSource(this.prescription);
  allergiesDataSource = new MatTableDataSource(this.allergies);
  displayedColumnsAllergy: string[] = ['serialNo', 'name', 'description'];

  patient = {};

  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute) {
    const currentPatientId = this.route.snapshot.params.patient_id;
    this.patient = this.patientsService.patients.find(element => element.name === currentPatientId);
    if (this.patient === undefined) {
      this.router.navigate(['..', 'search'], {relativeTo: this.route}).then();
    }
  }

  ngOnInit() {
  }

}
