import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Componenets */
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { RequestResetComponent } from './core/components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './core/components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './core/services/before-login.service';
import { AfterLoginService } from './core/services/after-login.service';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [] },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [BeforeLoginService] 
  },
  { 
    path: 'signup', 
    component: SignupComponent,
    canActivate: [BeforeLoginService] 
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
