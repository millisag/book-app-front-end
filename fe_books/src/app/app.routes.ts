import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] },
    
    { path: 'login',
        loadComponent: () => import('./components/login/login.component').then((c) => c.LoginComponent),
        canActivate: [NoAuthGuard] },

    { path: 'books/new',
        loadComponent: () =>
          import('./book-new/book-new.component').then(
            (c) => c.BookNewComponent
          ),
        canActivate: [AuthGuard] },

    { path: '**', redirectTo: 'login' },
];


