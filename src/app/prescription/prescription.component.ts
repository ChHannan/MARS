import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as interfaces from '../services/interfaces';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../services/api/api.service';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescription: interfaces.Prescription[] = [];
  displayedColumnsPrescriptions: string[] = ['serialNo', 'medicine', 'dose', 'frequency'];
  prescriptionDataSource = new MatTableDataSource(this.prescription);

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.apiService.getPrescription().subscribe(res => {
        this.prescription = res;
        this.prescriptionDataSource = new MatTableDataSource(this.prescription);
      });
    });
  }

}
