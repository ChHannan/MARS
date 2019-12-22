import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PatientsService} from "../../services/patients.service";
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-visits',
  templateUrl: './dialog-visits.component.html',
  styleUrls: ['./dialog-visits.component.css']
})
export class DialogVisitsComponent implements OnInit {

  visit = {
    patient_id: '',
  };
  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private patientsService: PatientsService,
              private router: Router, private dialog: MatDialog) {
  }
  ngOnInit() {
  }

  addVisit() {
    this.visit.patient_id = this.patientsService.current.id;
    this.apiService.postVisit(this.visit).subscribe(res => {
      this.snackBar.open('Visit added successfully!', '', {duration: 1500});
      this.visit = {patient_id: ''};
      this.dialog.closeAll();
    }, error => this.snackBar.open('Something went wrong! :(', '', {duration: 1500}));
  }
}
