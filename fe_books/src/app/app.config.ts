import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, inject } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);
  const authToken = authService.getToken();

  const authReq = authToken
    ? req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      })
    : req;
  return next(authReq);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authTokenInterceptor]))
  ]
};