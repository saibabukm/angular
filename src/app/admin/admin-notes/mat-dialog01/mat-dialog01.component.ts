import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-mat-dialog01',
  templateUrl: './mat-dialog01.component.html',
  styleUrls: ['./mat-dialog01.component.scss']
})
export class MatDialog01Component implements OnInit {
  dataJson: any;
  
  constructor(public thisDialogRef: MatDialogRef<MatDialog01Component>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('CLOSE');
  }

}
