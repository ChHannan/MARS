import { Injectable } from '@angular/core';

export interface DashboardLink {
  name: string;
  link: string;
  icon: string;
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
        {name: 'Patient', link: 'patient', icon: 'person'},
        {name: 'Employee', link: 'employee' , icon: 'work'},
        {name: 'Profile', link: 'profile' , icon: 'person'},
      ],
    },
    {
      userType: 'doctor',
      links: [
        {name: 'Patient', link: 'patient', icon: ''},
        {name: 'Profile', link: 'profile', icon: ''}
      ]
    },
    {
      userType: 'nurse',
      links: [
        {name: 'Patient', link: 'patient', icon: ''},
        {name: 'Profile', link: 'profile', icon: ''}
      ]
    },
    {
      userType: 'patient',
      links: [
        {name: 'Prescription', link: 'prescription', icon: ''},
        {name: 'Medical History', link: 'medical-history', icon: ''},
        {name: 'Allergy', link: 'allergy', icon: ''},
        {name: 'Visits', link: 'visits', icon: ''},
        {name: 'Profile', link: 'profile', icon: ''}
      ]
    }
  ];
  currentDashBoardUserLink: DashboardUserLink;
  userType = 'admin';
  constructor() {
    this.updateUser();
  }
  updateUser() {
    this.currentDashBoardUserLink = this.dashBoardUserLinks.find(ele => ele.userType === this.userType);
  }
}
