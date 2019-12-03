import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDividerModule,
  MatGridListModule,
  MatDialogModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatFormFieldModule
} from "@angular/material";
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminNotesComponent } from './admin/admin-notes/admin-notes.component';
import { MatDialog01Component } from './admin/admin-notes/mat-dialog01/mat-dialog01.component';
import { MatDialog02Component } from './admin/admin-notes/mat-dialog02/mat-dialog02.component';
import { MatDialog03Component } from './admin/admin-notes/mat-dialog03/mat-dialog03.component';
import { MatDialog04Component } from './admin/admin-notes/mat-dialog04/mat-dialog04.component';
import { CkeditorComponent } from './shared/ckeditor/ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    NotfoundComponent,
    AdminComponent,
    AdminDashboardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminNotesComponent,
    MatDialog01Component,
    MatDialog02Component,
    MatDialog03Component,
    MatDialog04Component,
    CkeditorComponent
  ],
  imports: [
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatAutocompleteModule,
// other
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    CKEditorModule 
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
