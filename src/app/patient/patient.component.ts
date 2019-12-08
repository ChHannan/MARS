import {Component, OnInit} from '@angular/core';
import {PatientsService} from './services/patients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  patientsService: PatientsService;
  router: Router;
  route: ActivatedRoute;
  routeLinks = [{label: 'Search Patients', route: 'search', icon: 'search'}, {
    label: 'Add Patients', route: 'add', icon: 'person_add'
  }];

  constructor(patientsService: PatientsService, router: Router, route: ActivatedRoute) {
    this.patientsService = patientsService;
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
  }

  close_patient(event, patient) {
    const indexEle = this.patientsService.patients.findIndex(element => element.name === patient.name);
    const currentPatientId = this.route.snapshot.children[0].params.patient_id;
    if (patient.name === currentPatientId) {
      if (this.patientsService.patients.length > indexEle + 1) {
        this.router.navigate([this.patientsService.patients[indexEle + 1].name], {relativeTo: this.route})
          .then();
      } else if (this.patientsService.patients.length !== 1) {
        this.router.navigate([this.patientsService.patients[indexEle - 1].name],
          {relativeTo: this.route}).then();
      } else {
        this.router.navigate(['search'], {relativeTo: this.route}).then();
      }
    }
    this.patientsService.patients.splice(indexEle, 1);
  }
}
