import { Component, OnInit } from '@angular/core';

export interface Employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [
    {value: 'value-0', viewValue: 'Doctor'},
    {value: 'value-1', viewValue: 'Nurse'},
    {value: 'value-2', viewValue: 'Admin'}
  ];
  startDate = new Date(1990, 0, 1);
  currentDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
