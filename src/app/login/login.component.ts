import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  cnic = '';
  password = '';
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const token = localStorage.getItem('token');
        if (!(token === 'undefined' || token === null)) {
          this.router.navigate(['dashboard', ]).then();
        }
      }
    );
  }

  login() {
    this.userService.login(this.cnic, this.password);
  }
}
