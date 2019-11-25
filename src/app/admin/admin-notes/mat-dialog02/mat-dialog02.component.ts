import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-mat-dialog02',
  templateUrl: './mat-dialog02.component.html',
  styleUrls: ['./mat-dialog02.component.scss']
})
export class MatDialog02Component implements OnInit {
  dataJson: any;
  
  constructor(public thisDialogRef: MatDialogRef<MatDialog02Component>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('CLOSE');
  }

}