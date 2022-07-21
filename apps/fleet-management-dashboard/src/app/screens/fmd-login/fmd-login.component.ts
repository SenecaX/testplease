import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../../pleasecore/services/authentication.service';

@Component({
  selector: 'testplease-fmd-login',
  templateUrl: './fmd-login.component.html',
  styleUrls: ['./fmd-login.component.scss'],
})
export class FmdLoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public credentialsHandler(event: any) {
    console.log('event :>> ', event);

    // this.loading = true;
    this.authenticationService
      .login(event.email, event.password)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // this.error = error;
          // this.loading = false;
        },
      });
  }
}
