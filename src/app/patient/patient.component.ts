import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.navigate([{outlets: {patient: ['search']}}], {relativeTo: this.route}).then();
  }

  ngOnInit() {
  }

}
