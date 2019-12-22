import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import * as interfaces from '../services/interfaces';


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
    gender: 'male'
  };
  employees: Employee[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'doctor', viewValue: 'Doctor'},
    {value: 'nurse', viewValue: 'Nurse'}
  ];
  startDate = new Date(1990, 0, 1);
  currentDate = new Date();

  constructor() {
  }

  ngOnInit() {
  }
}
