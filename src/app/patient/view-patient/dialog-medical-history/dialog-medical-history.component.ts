import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api/api.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-medical-history',
  templateUrl: './dialog-medical-history.component.html',
  styleUrls: ['./dialog-medical-history.component.css']
})
export class DialogMedicalHistoryComponent implements OnInit {

  medicalHistory = {};
  constructor(private apiService: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addMedicalHistory() {
    this.apiService.postMedicalHistory(this.medicalHistory).subscribe(res => {
      this.snackBar.open('Medical History', '', {duration: 1500});
    });
  }
}
