import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import * as interfaces from '../services/interfaces';
import {ApiService} from "../services/api/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";


export interface Employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('fadein', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})
export class EmployeeComponent implements OnInit {

  doctor = {};
  nurse = {};
  admin = {};
  user = {
    group: 'admin',
    gender: 'male',
    admin: {},
    nurse: {},
    doctor: {}
  };
  employees: Employee[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'doctor', viewValue: 'Doctor'},
    {value: 'nurse', viewValue: 'Nurse'}
  ];
  startDate = new Date(1990, 0, 1);
  currentDate = new Date();

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addEmployee() {
    if (this.user.group === 'admin') {
      this.user.admin = this.admin;
    } else if (this.user.group === 'doctor') {
      this.user.doctor = this.doctor;
    } else if (this.user.group === 'nurse') {
      this.user.nurse = this.nurse;
    }
    this.apiService.postUser(this.user).subscribe(res => {
      this.snackBar.open('Employee has been added', '', {duration: 1500});
      this.doctor = {};
      this.nurse = {};
      this.admin = {};
      this.user = {
        group: 'admin',
        gender: 'male',
        admin: {},
        nurse: {},
        doctor: {}
      };
    }, error => this.snackBar.open('Something went wrong! :(', '', {duration: 1500}));
  }
}
