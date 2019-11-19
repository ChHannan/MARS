import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  constructor() {
    window.history.replaceState('', 'Patient - Dashboard', 'dashboard/patient/');
  }

  ngOnInit() {
  }

}
