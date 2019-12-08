import {Component} from '@angular/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
}

