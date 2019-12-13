import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditorService } from './../../core/services/editor.service';

@Component({
  selector: 'app-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.scss']
})
export class EditorDialogComponent implements OnInit {
  message: string;

  constructor(private content: EditorService, public thisDialogRef: MatDialogRef<EditorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit() {
    this.content.currentMessage.subscribe(message => this.message = message)
  }

  onCloseCancel() {
    this.thisDialogRef.close('CLOSE');
  }
}
