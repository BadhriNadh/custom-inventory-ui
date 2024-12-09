import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-logout-card',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent {
  readonly infoRef = inject(MatDialogRef<LogoutDialogComponent>);
  onYesClick(): void {
    this.infoRef.close(true);
  }
}
