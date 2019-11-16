import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.history.replaceState('', 'Search Patient', '/patient');
  }

}
