import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  };

  errorMessage = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe({
      next: (response: { token: any; }) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/']); 
      },
      error: (err: { error: { errors: any[]; }; }) => {
        this.errorMessage = err.error?.errors?.join(', ') || 'Signup failed';
      }
    });
  }
}

