import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { UserData } from '../../assets/users.mock';

/**
 * Guard which protects the 'user-details' route.
 * It checks if the state exists and if it has the 'name' property.
 */
export const userDetailsGuard: CanActivateFn = () => {
    const router = inject(Router);

    const currentNavigation = router.getCurrentNavigation();
    const state = currentNavigation?.extras.state as { user: UserData } | undefined;
    const user = state?.user;

    // If user doesn't exist or doesn't have a name we block navigation
    if (!user || !user?.name) {
        router.navigate(['/user-info']);
        return false;
    }

    return true;
};
