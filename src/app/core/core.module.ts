import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    // UserService
  ],
  declarations: [
    // HeaderComponent,
    // FooterComponent
  LoginComponent,
    NavbarComponent,
    PasswordComponent,
    ProfileComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent],
  exports: [
    // HeaderComponent,
    // FooterComponent
  ],
})
export class CoreModule { }