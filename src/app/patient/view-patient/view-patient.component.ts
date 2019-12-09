import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientsService} from '../services/patients.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patient = {};
  allergies = ['Acne', 'Food Allergy', 'Insect Sting'];
  route: ActivatedRoute;
  constructor(private patientsService: PatientsService, private router: Router, route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.patient = this.patientsService.patients.find(element => element.name === params.patient_id);
      if (this.patient === undefined) {
        this.router.navigate([
          'dashboard', 'patient', 'search'
        ]).then();
      }
    });
  }

}
