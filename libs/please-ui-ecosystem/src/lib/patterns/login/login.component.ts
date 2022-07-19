import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'testplease-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() submitColor: string | undefined;
  @Input() submitText: string | undefined;

  @Input() cancelColor: string | undefined;
  @Input() cancelText: string | undefined;

  constructor() {
    // this.submitColor = 'primary';
    // this.submitText = 'Submit';
    // this.cancelColor = 'warn';
    // this.cancelText = 'Cancel';
  }
}
