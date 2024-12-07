import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {AddVendorDialogComponent} from "../add-vendor-dialog/add-vendor-dialog.component";
import {LogoutDialogComponent} from "../logout-dialog/logout-dialog.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  openDrawerEventCreate() {
    this.openDrawerEvent.emit();
  }


  openLogout(): void {
      const addRef = this.matDialog.open(LogoutDialogComponent);
      addRef.afterClosed().subscribe(() => {
      });
    }
}
