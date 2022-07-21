import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'testplease-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() submitColor: string | undefined;
  @Input() submitText: string | undefined;

  @Input() cancelColor: string | undefined;
  @Input() cancelText: string | undefined;

    // TODO: check for a good naming for Outputs
    @Output() emitLoginCredentials = new EventEmitter<string>();

  public email = 'email';
  public password = 'password';

  public loginForm!: FormGroup;

  constructor(public fb: FormBuilder) {
    // this.submitColor = 'primary';
    // this.submitText = 'Submit';
    // this.cancelColor = 'warn';
    // this.cancelText = 'Cancel';
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  public submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);

    this.emitLoginCredentials.emit(this.loginForm.value);
  }
}
