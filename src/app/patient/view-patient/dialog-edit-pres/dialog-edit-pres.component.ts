import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PatientsService} from '../../services/patients.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-pres',
  templateUrl: './dialog-edit-pres.component.html',
  styleUrls: ['./dialog-edit-pres.component.css']
})
export class DialogEditPresComponent implements OnInit {

  prescription = {
    patient_id: '',
  };

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private patientsService: PatientsService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.prescription = this.patientsService.dialogData;
  }

  updatePrescription() {
    this.prescription.patient_id = this.patientsService.current.id;
    this.apiService.patchPrescription(this.prescription).subscribe(res => {
      this.snackBar.open('Prescription updated successfully!', '', {duration: 1500});
      this.prescription = {patient_id: ''};
      this.dialog.closeAll();
    }, error => this.snackBar.open('Something went wrong! :(', '', {duration: 1500}));
  }
}
