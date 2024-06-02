import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Speichern Sie die URL, zu der der Benutzer weitergeleitet werden soll
      this.authService.redirectUrl = this.router.url;
      // Weiterleitung zur Login-Seite
      this.router.navigate(['/login']);
      return false;
    }
  }
}
