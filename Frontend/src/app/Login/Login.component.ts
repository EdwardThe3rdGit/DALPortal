import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Bootstrap's JavaScript needs to be imported
    import('bootstrap').then((bootstrap) => {
      const modalElement = document.getElementById('exampleModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }

  login() {
    this.authService.login();
    const returnUrl = this.router.parseUrl(this.router.url).queryParams['returnUrl'] || '/assets';
    this.router.navigateByUrl(returnUrl);
  }
}
