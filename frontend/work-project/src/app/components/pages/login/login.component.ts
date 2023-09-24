import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitted = false;
  working = false;
  complete = false;
  strongPassword = false;

  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  get f() {
    return this.signupForm.controls;
  }

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
  }
}
