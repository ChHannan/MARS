import {Component, OnInit} from '@angular/core';
import {DashboardUserLink, UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'MARS';


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
        {name: 'Patient', link: 'patient'},
        {name: 'Profile', link: 'profile'}
      ]
    },
    {
      userType: 'patient',
      links: [
        {name: 'Prescription', link: 'prescription'},
        {name: 'Medical History', link: 'medical-history'},
        {name: 'Allergy', link: 'allergy'},
        {name: 'Visits', link: 'visits'},
        {name: 'Profile', link: 'profile'}
      ]
    }
  ];
  currentDashBoardUserLink: DashboardUserLink = {
    userType: '',
    links: []
  };

  constructor(private apiService: ApiService, private userService: UserService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      const token = localStorage.getItem('token');
      if (!(token === 'undefined' || token === null)) {
        this.apiService.setToken(token);
        const selfUser = JSON.parse(localStorage.getItem('selfUser'));
        this.currentDashBoardUserLink = this.dashBoardUserLinks.find(ele => ele.userType === selfUser.group);
        this.redirect();
      } else {
        this.router.navigate(['login', ]).then();
      }
    });
  }

  redirect() {
    if (this.route.snapshot.children.length === 0) {
      const user = JSON.parse(localStorage.getItem('selfUser'));
      if (user.group === 'admin') {
        this.router.navigate(['dashboard', this.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'doctor') {
        this.router.navigate(['dashboard', this.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'nurse') {
        this.router.navigate(['dashboard', this.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'patient') {
        this.router.navigate(['dashboard', this.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Prescription'
        ).link]).then();
      }
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/').then();
  }
}
