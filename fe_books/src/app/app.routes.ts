import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { BookNewComponent } from './book-new/book-new.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',
        loadComponent: () => import('./components/login/login.component').then((c) => c.LoginComponent),
        canActivate: [NoAuthGuard],
      },
      { path: '**', redirectTo: 'login' },

      {
        path: 'books/new',
        loadComponent: () =>
          import('./book-new/book-new.component').then(
            (c) => c.BookNewComponent
          ),
        canActivate: [AuthGuard],
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


