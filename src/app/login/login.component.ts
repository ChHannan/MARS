import {Component} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatProgressButtonOptions} from 'mat-progress-buttons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(50%)', }),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
    trigger('fadein', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})

export class LoginComponent {
  userService: UserService;
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Log in',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    fullWidth: true,
    disabled: false,
    mode: 'indeterminate',
  };

  constructor(userService: UserService) {
    this.userService = userService;
  }

  loadingSpinner(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 3500);
    this.userService.updateUser();
  }
}

