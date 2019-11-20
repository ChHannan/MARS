import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  routeLinks = [{label: 'Search Patients', route: 'search'}, {
    label: 'Add Patients', route: 'add'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
