import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userService: UserService;
  title = 'MARS';
  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }
}
