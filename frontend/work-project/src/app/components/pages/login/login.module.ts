import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [LoginComponent, PasswordStrengthComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  exports: [LoginComponent, PasswordStrengthComponent],
})
export class LoginModule {}
