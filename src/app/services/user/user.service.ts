import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {SerializersService} from '../serializers/serializers.service';
import {Router} from '@angular/router';
import {User} from '../interfaces';

export interface DashboardLink {
  name: string;
  link: string;
}

export interface DashboardUserLink {
  userType: string;
  links: DashboardLink[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService, private serializersService: SerializersService,
              private router: Router) {
  }

  updateUser() {
    const selfUser = JSON.parse(localStorage.getItem('selfUser'));
    if (selfUser === undefined || selfUser === 'undefined') {
      this.apiService.getUser().subscribe(res => {
        this.serializersService.setSelfUser(res[0]);
      }, error => console.log(error));
    }
  }

  login(cnic, password) {
    this.apiService.getToken(cnic, password).subscribe(res => {
        this.apiService.setToken(res.token);
        this.apiService.getUser().subscribe(userRes => {
            this.serializersService.setSelfUser(userRes[0]);

            // Update user
            this.updateUser();
            this.router.navigate(['dashboard', ]).then();
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
