import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.less']
})
export class NotificationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
