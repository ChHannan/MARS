import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  user = {
    first_name: '',
    middle_name: '',
    last_name: '',
    cnic: '',
    contact: '',
    emergency_contact: '',
    email: '',
    address: '',
    city: '',
    country: '',
    gender: '',
    patient: null,
    group: 'patient',
    password: 'randompass',
  };
  patient = {
    weight: 0.0,
    height: 0.0,
    guardian_name: '',
    date_of_birth: null,
    guardian_contact: '',
    guardian_address: '',
    relationship: ''
  };

  startDate = new Date(1990, 0, 1);

  constructor(private snackBar: MatSnackBar, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  addPatient() {
    console.log(this.user);
    this.user.patient = this.patient;
    if (this.user.first_name === '') {
      this.snackBar.open('First Name is required!', '', {
        duration: 2000
      });
    } else if (this.user.cnic === '') {
      this.snackBar.open('CNIC is required!', '', {
        duration: 2000
      });
    } else if (this.user.contact === '') {
      this.snackBar.open('Mobile Number is required!', '', {
        duration: 2000
      });
    } else if (this.patient.date_of_birth  === '') {
      this.snackBar.open('Date of Birth is required!', '', {
        duration: 2000
      });
    } else {
      this.apiService.postUser(this.user).subscribe(res => {
        this.snackBar.open('Patient added!', '', {
          duration: 2000
        });
        console.log(res);
      }, error => {
        console.log(error);
        this.snackBar.open(error.body);
      });
    }
  }
}
