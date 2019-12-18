import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userService: UserService;
  route: ActivatedRoute;
  router: Router;
  title = 'MARS';

  constructor(userService: UserService, route: ActivatedRoute, router: Router) {
    this.userService = userService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.userService.userType === 'admin') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (this.userService.userType === 'doctor') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (this.userService.userType === 'nurse') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (this.userService.userType === 'patient') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Prescription'
        ).link]).then();
      }
    });
    console.log(this.userService.currentDashBoardUserLink);
  }
}
