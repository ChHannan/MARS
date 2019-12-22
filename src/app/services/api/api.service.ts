import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as interfaces from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  TOKEN = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    })
  };
  API = 'http://localhost:8000/api/';
  TOKEN_VIEW = `${this.API}token/`;
  USER_VIEW = `${this.API}user/`;
  USER_SELF_VIEW = `${this.API}user/?type=self`;
  USER_PATIENT_VIEW = `${this.API}user/?type=patient`;
  MEDICAL_HISTORY_VIEW = `${this.API}record/medical/history/`;
  VISIT_VIEW = `${this.API}record/visit/`;
  ALLERGY_VIEW = `${this.API}record/allergy/`;
  PRESCRIPTION_VIEW = `${this.API}record/prescription/`;

  constructor(private http: HttpClient) {
  }

  setToken(token: string) {
    this.TOKEN = token;
    localStorage.setItem('token', token);
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Token ${token}`);
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

  getMedicalHistory(patientId= '') {
    return this.http.get<interfaces.MedicalHistory[]>(`${this.MEDICAL_HISTORY_VIEW}?patient=${patientId}`,
      this.httpOptions);
  }

  getAllergy(patientId= '') {
    return this.http.get<interfaces.Allergy[]>(`${this.ALLERGY_VIEW}?patient=${patientId}`,
      this.httpOptions);
  }

  getVisit(patientId= '') {
    return this.http.get<interfaces.Visit[]>(`${this.VISIT_VIEW}?patient=${patientId}`,
      this.httpOptions);
  }

  getPrescription(patientId= '') {
    return this.http.get<interfaces.Prescription[]>(`${this.PRESCRIPTION_VIEW}?patient=${patientId}`,
      this.httpOptions);
  }

  postUser(data) {
    return this.http.post(this.USER_VIEW, data);
  }
}
