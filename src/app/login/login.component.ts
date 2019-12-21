import {Component} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
        if (localStorage.getItem('selfUser') !== undefined) {
          this.router.navigate(['dashboard', ]).then();
        }
      }
    );
  }
}
