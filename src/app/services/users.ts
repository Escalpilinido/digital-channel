import { Injectable } from '@angular/core';
import { usersData } from '../../assets/users.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {

  getUsers() {
    return of(usersData);
  }

}
