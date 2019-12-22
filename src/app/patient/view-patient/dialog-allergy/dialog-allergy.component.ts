import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PatientsService} from "../../services/patients.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-allergy',
  templateUrl: './dialog-allergy.component.html',
  styleUrls: ['./dialog-allergy.component.css']
})
export class DialogAllergyComponent implements OnInit {

  allergy = {
    patient_id: '',
  };
  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private patientsService: PatientsService,
              private router: Router, private dialog: MatDialog) {
  }
  ngOnInit() {
  }

  addAllergy() {
    this.allergy.patient_id = this.patientsService.current.id;
    this.apiService.postAllergy(this.allergy).subscribe(res => {
      this.snackBar.open('Allergy added successfully!', '', {duration: 1500});
      this.allergy = {patient_id: ''};
      this.dialog.closeAll();
    }, error => this.snackBar.open('Something went wrong! :(', '', {duration: 1500}));
  }
}
