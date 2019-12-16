import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {PatientsService} from '../services/patients.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistory = [
    {type: 'Disease', description: 'Cancer Disease', time: '1 year ago'},
    {type: 'Disease', description: 'Heart', time: '1 year ago'},
    {type: 'Surgery', description: 'Heart Surgery', time: '6 months ago'},
    {type: 'Disease', description: 'Liver Disease', time: '1 year ago'},
    ]
  medicalHistoryDataSource = new MatTableDataSource((this.medicalHistory));
  displayedColumnsMedicalHistory: string[] = ['type', 'description', 'time'];

  constructor() { }

  ngOnInit() {
  }

}
