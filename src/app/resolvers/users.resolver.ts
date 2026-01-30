import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';

/**
 * Resolver for user-info route
 * We will simulate init the app and users data and load in a behavior subject
 */
export const usersResolver: ResolveFn<void> = () => {
    const usersService = inject(UsersService);

    usersService.initUsers();
};
