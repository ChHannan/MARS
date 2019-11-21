import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  step = 0;
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  setStep(step) {
    this.step = step;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
