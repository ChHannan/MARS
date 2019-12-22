import {Component, OnInit} from '@angular/core';
import {PatientsService} from './services/patients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  routeLinks = [{label: 'Search Patients', route: 'search', icon: 'search'}, {
    label: 'Add Patients', route: 'add', icon: 'person_add'
  }];

  constructor(private patientsService: PatientsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const patients = JSON.parse(localStorage.getItem('patients'));
      if (!(patients === 'undefined' || patients === null)) {
        this.patientsService.patients = patients;
      }
    });
  }

  close_patient(event, patient) {
    const indexEle = this.patientsService.patients.findIndex(element => element.cnic === patient.cnic);
    const currentPatientId = this.route.snapshot.children[0].params.patient_id;
    if (patient.cnic === currentPatientId) {
      if (this.patientsService.patients.length > indexEle + 1) {
        this.router.navigate([this.patientsService.patients[indexEle + 1].cnic], {relativeTo: this.route})
          .then();
      } else if (this.patientsService.patients.length !== 1) {
        this.router.navigate([this.patientsService.patients[indexEle - 1].cnic],
          {relativeTo: this.route}).then();
      } else {
        this.router.navigate(['search'], {relativeTo: this.route}).then();
      }
    }
    this.patientsService.patients.splice(indexEle, 1);
  }
}
