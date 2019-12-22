import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients = [];
  constructor() {}

  add(row) {
    this.patients.push(row);
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  load() {

  }
}
