import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{RouterModule} from '@angular/router'
import{FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sign-up',component:SignupComponent}
    ])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
