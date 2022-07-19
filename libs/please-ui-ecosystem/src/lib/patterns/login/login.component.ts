import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testplease-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public submitColor: string | undefined;
  public submitText: string | undefined;

  public cancelColor: string | undefined;
  public cancelText: string | undefined;

  constructor() {
    // this.submitColor = 'primary';
    // this.submitText = 'Submit';
    // this.cancelColor = 'warn';
    // this.cancelText = 'Cancel';
  }
}
