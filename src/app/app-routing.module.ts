import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Componenets */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { RequestResetComponent } from './core/components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './core/components/password/response-reset/response-reset.component';

/**Services */
import { BeforeLoginService } from './core/services/before-login.service';
import { AfterLoginService } from './core/services/after-login.service';
import { CkeditorComponent } from './shared/ckeditor/ckeditor.component';

import { EditorDialogComponent } from './shared/editor-dialog/editor-dialog.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MatDialog01Component } from './admin/admin-notes/mat-dialog01/mat-dialog01.component';
import { MatDialog02Component } from './admin/admin-notes/mat-dialog02/mat-dialog02.component';
import { MatDialog03Component } from './admin/admin-notes/mat-dialog03/mat-dialog03.component';
import { MatDialog04Component } from './admin/admin-notes/mat-dialog04/mat-dialog04.component';

const routes: Routes = [

  //no layout routes
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },
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
  { path: '**', redirectTo: '/notfound' },
  {
    path: 'mat-dialog01',
    component: MatDialog01Component,
    canActivate: [AfterLoginService]
  },
  {
    path: 'mat-dialog02',
    component: MatDialog02Component,
    canActivate: [AfterLoginService]
  },
  {
    path: 'mat-dialog03',
    component: MatDialog03Component,
    canActivate: [AfterLoginService]
  },
  {
    path: 'mat-dialog04',
    component: MatDialog04Component,
    canActivate: [AfterLoginService]
  },
  {
    path: 'ckeditor',
    component: CkeditorComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'editor-dialog',
    component:EditorDialogComponent,
    canActivate: [AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }