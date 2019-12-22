import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PatientsService} from "../../services/patients.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-edit-allergies',
  templateUrl: './dialog-edit-allergies.component.html',
  styleUrls: ['./dialog-edit-allergies.component.css']
})
export class DialogEditAllergiesComponent implements OnInit {

  allergy = {
    patient_id: '',
  };

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private patientsService: PatientsService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.allergy = this.patientsService.dialogData;
  }

  updateAllergy() {
    this.allergy.patient_id = this.patientsService.current.id;
    this.apiService.patchAllergy(this.allergy).subscribe(res => {
      this.snackBar.open('Allergy updated successfully!', '', {duration: 1500});
      this.allergy = {patient_id: ''};
      this.dialog.closeAll();
    }, error => console.log(error));
  }
}
