import { Injectable } from '@angular/core';
import * as interfaces from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SerializersService {

  constructor() {}
  setSelfUser(user: interfaces.User) {
    localStorage.setItem('selfUser', JSON.stringify(user));
  }
}
