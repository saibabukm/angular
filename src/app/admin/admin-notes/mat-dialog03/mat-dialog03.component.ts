import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-mat-dialog03',
  templateUrl: './mat-dialog03.component.html',
  styleUrls: ['./mat-dialog03.component.scss']
})
export class MatDialog03Component implements OnInit {
  dataJson: any;
  
  constructor(public thisDialogRef: MatDialogRef<MatDialog03Component>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('CLOSE');
  }

}
