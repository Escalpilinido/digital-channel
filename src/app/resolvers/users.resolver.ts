import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users';
import { UserData } from '../../assets/users.mock';
import { Observable } from 'rxjs';

/**
 * Resolver for user-info route
 */
export const usersResolver: ResolveFn<Observable<UserData[]>> = () => {
    const usersService = inject(UsersService);

    return usersService.initUsers();
};
