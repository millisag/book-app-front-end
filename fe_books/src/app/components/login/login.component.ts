import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: { token: any; }) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/']); 
      },
      error: (err: any) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}

