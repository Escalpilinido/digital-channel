import { Routes } from '@angular/router';
import { userDetailsGuard } from './guards/user-details.guard';

export const routes: Routes = [
    {
        path: 'user-details',
        loadComponent: () => import('./pages/user-details/user-details.component').then(m => m.UserDetailsComponent),
        canActivate: [userDetailsGuard]
    },
    { path: 'user-info', loadComponent: () => import('./pages/user-info/user-info.component').then(m => m.UserInfoComponent) },
    { path: '', redirectTo: '/user-info', pathMatch: 'full' },
    { path: '**', redirectTo: '/user-info' }
];
