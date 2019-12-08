import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


export interface DashboardLink {
  name: string;
  link: string;
}
export interface DashboardUserLink {
  userType: string;
  links: DashboardLink[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dashBoardUserLinks: DashboardUserLink[] = [
    {
      userType: 'admin',
      links: [
        {name: 'Patient', link: 'patient'},
        {name: 'Employee', link: 'employee'},
        {name: 'Profile', link: 'profile'},
      ],
    },
    {
      userType: 'doctor',
      links: [
        {name: 'Patient', link: 'patient'},
        {name: 'Profile', link: 'profile'}
      ]
    },
    {
      userType: 'nurse',
      links: [
        {name: 'Patient', link: 'nurse'},
        {name: 'Profile', link: 'profile'}
      ]
    },
    {
      userType: 'patient',
      links: [
        {name: 'Prescription', link: 'prescription'},
        {name: 'Medical History', link: 'medical-history'},
        {name: 'Profile', link: 'profile'}
      ]
    }
  ];
  currentDashBoardUserLink: DashboardUserLink;
  userType = 'admin';
  constructor() {
    this.updateUser();
  }
  updateUser() {
    console.log(this.userType);
    this.currentDashBoardUserLink = this.dashBoardUserLinks.find(ele => ele.userType === this.userType);
    console.log(this.currentDashBoardUserLink);
  }
}
