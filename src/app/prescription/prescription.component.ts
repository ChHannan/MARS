import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescription = [
    {serialNo: 1, medicine: 'Panadol', dose: '100mg', frequency: 'Every Morning'},
    {serialNo: 2, medicine: 'Rozerem', dose: '100mg', frequency: 'At bed'},
    {serialNo: 3, medicine: 'Restoril', dose: '100mg', frequency: '2x a day'},
    {serialNo: 4, medicine: 'Halcion', dose: '100mg', frequency: '3x a day'},
    {serialNo: 5, medicine: 'Sonata', dose: '100mg', frequency: 'Every Morning'},
  ];
  displayedColumnsPrescriptions: string[] = ['serialNo', 'medicine', 'dose', 'frequency'];
  presciptionDataSource = new MatTableDataSource(this.prescription);

  constructor() { }

  ngOnInit() {
  }

}
