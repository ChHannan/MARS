import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  startDate = new Date(1990, 0, 1);
  currentDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
