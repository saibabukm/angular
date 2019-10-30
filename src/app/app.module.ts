import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './core/components/login/login.component';

import { SignupComponent } from './core/components/signup/signup.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { RequestResetComponent } from './core/components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './core/components/password/response-reset/response-reset.component';
import { JarwisService } from './core/services/jarwis.service';
import { TokenService } from './core/services/token.service';
import { AuthService } from './core/services/auth.service';
import { AfterLoginService } from './core/services/after-login.service';
import { BeforeLoginService } from './core/services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
