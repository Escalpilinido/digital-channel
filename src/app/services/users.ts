import { Injectable } from '@angular/core';
import { UserData, usersData } from '../../assets/users.mock';
import { BehaviorSubject, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Store users data to prevent multiple calls to the API
  private readonly users = new BehaviorSubject([] as UserData[]);

  initUsers() {
    return of(usersData).pipe(
      tap(users => this.users.next(users))
    );
  }

  getUsers() {
    return this.users.asObservable();
  }

}
