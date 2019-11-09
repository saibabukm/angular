import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Componenets */
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { RequestResetComponent } from './core/components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './core/components/password/response-reset/response-reset.component';

/**Services */
import { BeforeLoginService } from './core/services/before-login.service';
import { AfterLoginService } from './core/services/after-login.service';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [

  //no layout routes
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
  {
    path: 'notfound',
    component: NotfoundComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AfterLoginService]
  },
  // otherwise redirect to notfound
  { path: '**', redirectTo: '/notfound' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
