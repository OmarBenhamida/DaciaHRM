import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './login-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [LoginComponent, AuthComponent, WelcomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),

    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
