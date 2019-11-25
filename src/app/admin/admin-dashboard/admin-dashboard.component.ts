import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { TokenService } from './../../core/services/token.service';
import { AuthService } from './../../core/services/auth.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Import Dialogs
import { MatDialog01Component } from './../admin-notes/mat-dialog01/mat-dialog01.component';
import { MatDialog02Component } from './../admin-notes/mat-dialog02/mat-dialog02.component';
import { MatDialog03Component } from './../admin-notes/mat-dialog03/mat-dialog03.component';
import { MatDialog04Component } from './../admin-notes/mat-dialog04/mat-dialog04.component';

export interface Section {
  name: string;
  route: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  isShow: boolean;
  public currentUser;
  public loggedIn: boolean;
  topPosToStartShowing = 100;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private Auth: AuthService,
    private router: Router, private Token: TokenService) {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  openDialog1() {
    const dialogRef = this.dialog.open(MatDialog01Component, {
      width: '1550px',
      height: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(MatDialog02Component, {
      width: '1550px',
      height: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog3() {
    const dialogRef = this.dialog.open(MatDialog03Component, {
      width: '1550px',
      height: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog4() {
    const dialogRef = this.dialog.open(MatDialog04Component, {
      width: '1550px',
      height: '95%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  // Number of cards to be generated with column and rows to be covered  
  card1 = [
    { title: 'MS', cols: 1, rows: 1 }
  ];
  card2 = [
    { title: 'Rec', cols: 1, rows: 1 }
  ];
}