import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'MARS';

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.redirect();
    });
  }

  redirect() {
    if (this.route.snapshot.children.length === 0) {
      const user = JSON.parse(localStorage.getItem('selfUser'));
      if (user.group === 'admin') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'doctor') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'nurse') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Patient'
        ).link]).then();
      } else if (user.group === 'patient') {
        this.router.navigate(['dashboard', this.userService.currentDashBoardUserLink.links.find(
          ele => ele.name === 'Prescription'
        ).link]).then();
      }
    }
  }
}
