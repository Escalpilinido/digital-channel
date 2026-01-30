import { Injectable } from '@angular/core';
import { UserData, usersData } from '../../assets/users.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Keeping the mock data for simulate a api request with the resolver
  private readonly _users = new BehaviorSubject<UserData[]>([]);

  public readonly users$ = this._users.asObservable();

  initUsers() {
    this._users.next(usersData);
  }

  getUsers() {
    return this.users$;
  }

  createUser(user: UserData) {
    const currentUsers = this._users.value;
    const updatedUsers = [...currentUsers, user];

    this._users.next(updatedUsers);

    // Update the mock data for simulate a api request with the resolver
    usersData.push(user);
  }
}
