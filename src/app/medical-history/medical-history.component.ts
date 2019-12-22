import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../services/api/api.service';
import * as interfaces from '../services/interfaces';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistory: interfaces.MedicalHistory[];
  medicalHistoryDataSource = new MatTableDataSource((this.medicalHistory));
  displayedColumnsMedicalHistory: string[] = ['type', 'description', 'time'];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.apiService.getMedicalHistory().subscribe(res => {
        this.medicalHistory = res;
        this.medicalHistoryDataSource = new MatTableDataSource(this.medicalHistory);
      });
    });
  }

}
