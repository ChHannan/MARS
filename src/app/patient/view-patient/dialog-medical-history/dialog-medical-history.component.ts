import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PatientsService} from '../../services/patients.service';
import {Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-medical-history',
  templateUrl: './dialog-medical-history.component.html',
  styleUrls: ['./dialog-medical-history.component.css']
})
export class DialogMedicalHistoryComponent implements OnInit {

  medicalHistory = {
    patient_id: '',
  };

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private patientsService: PatientsService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  addMedicalHistory() {
    this.medicalHistory.patient_id = this.patientsService.current.id;
    this.apiService.postMedicalHistory(this.medicalHistory).subscribe(res => {
      this.snackBar.open('Medical History added successfully!', '', {duration: 1500});
      this.medicalHistory = {patient_id: ''};
      this.dialog.closeAll();
    }, error => this.snackBar.open('Something went wrong! :(', '', {duration: 1500}));
  }
}
