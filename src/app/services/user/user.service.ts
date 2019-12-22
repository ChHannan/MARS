import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {SerializersService} from '../serializers/serializers.service';
import {Router} from '@angular/router';
import {User} from "../interfaces";

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
  userType = '';
  cnic = '';
  password = '';

  constructor(private apiService: ApiService, private serializersService: SerializersService,
              private router: Router, private userService: UserService) {
    this.updateUser();
  }

  updateUser() {
    this.userType = JSON.parse(localStorage.getItem('selfUser')).group;
    this.currentDashBoardUserLink = this.dashBoardUserLinks.find(
      ele => ele.userType === this.userType
    );
  }

  login() {
    this.apiService.getToken(this.cnic, this.password).subscribe(res => {
        this.apiService.setToken(res.token);
        this.apiService.getUser().subscribe(userRes => {
            this.serializersService.setSelfUser(userRes[0]);

            // Update user
            this.updateUser();
            this.router.navigate(['dashboard',]).then();
          },
          error => {
            // Error logic here
            console.log(error);
          });
      },
      error => {
        // Error logic here
        console.log(error);
      });
  }
}
