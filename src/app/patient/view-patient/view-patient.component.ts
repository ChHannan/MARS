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
  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute) {
    const currentPatientId = this.route.snapshot.params.patient_id;
    this.patient = this.patientsService.patients.find(element => element.name === currentPatientId);
    if (this.patient === undefined) {
      this.router.navigate(['..', 'search'], {relativeTo: this.route}).then();
    }
  }

  ngOnInit() {
  }

}
