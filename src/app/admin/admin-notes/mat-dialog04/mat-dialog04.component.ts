import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-mat-dialog04',
  templateUrl: './mat-dialog04.component.html',
  styleUrls: ['./mat-dialog04.component.scss']
})
export class MatDialog04Component implements OnInit {
  dataJson: any;
  
  constructor(public thisDialogRef: MatDialogRef<MatDialog04Component>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('CLOSE');
  }

}
