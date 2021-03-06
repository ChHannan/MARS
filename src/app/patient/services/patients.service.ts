import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  current = {
    id: '',
  };
  dialogData = {patient_id: ''};
  patients = [];
  constructor() {}

  add(row) {
    this.patients.push(row);
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  load() {
    this.patients = JSON.parse(localStorage.getItem('patients'));
  }
}
