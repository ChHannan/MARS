import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as interfaces from '../interfaces';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  TOKEN = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: ''
    })
  };
  API = 'http://localhost:8000/api/';
  TOKEN_VIEW = `${this.API}token/`;
  USER_VIEW = `${this.API}user/`;
  USER_SELF_VIEW = `${this.API}user/?type=self`;
  USER_PATIENT_VIEW = `${this.API}user/?type=patient`;
  constructor(private http: HttpClient, private router: Router) {
    if ('token' in localStorage) {
      this.setToken(localStorage.getItem('token'));
    } else {
      this.router.navigateByUrl('http://localhost:8000/login').then();
    }
  }
  setToken(token: string) {
    this.TOKEN = token;
    localStorage.setItem('token', token);
    this.httpOptions.headers.set('Authorization', token);
  }
  getToken(cnic: string, password: string) {
    return this.http.post<interfaces.Token>(this.TOKEN_VIEW, {cnic, password}, this.httpOptions);
  }
  getUser() {
    return this.http.get<interfaces.User[]>(this.USER_SELF_VIEW, this.httpOptions);
  }
  getPatients() {
    return this.http.get<interfaces.User[]>(this.USER_PATIENT_VIEW, this.httpOptions);
  }
  postUser(data) {
    return this.http.post(this.USER_VIEW, data);
  }
}
