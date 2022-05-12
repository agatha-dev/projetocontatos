import { Component } from '@angular/core';
import { AuthenticationHelper } from './helpers/authentication.helper';
import { Auth } from './models/auth.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auth: Auth | null = null;

  constructor(
    private authenticationHelper: AuthenticationHelper,
    private router: Router,
    private spinner: NgxSpinnerService
  ){
    this.auth = authenticationHelper.get();
  }

  logout(): void {
    this.spinner.show();
    this.authenticationHelper.signOut();
    this.router.navigate(['/login']);

  }
}
