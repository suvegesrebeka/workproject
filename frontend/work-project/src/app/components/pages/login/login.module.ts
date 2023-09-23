import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatInputModule],
  exports: [LoginComponent],
})
export class LoginModule {}
