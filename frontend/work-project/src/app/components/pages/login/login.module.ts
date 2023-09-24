import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent, PasswordStrengthComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  exports: [LoginComponent, PasswordStrengthComponent],
})
export class LoginModule {}
