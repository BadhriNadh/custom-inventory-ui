import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {AddVendorDialogComponent} from "../../vendors-view/add-vendor-dialog/add-vendor-dialog.component";
import {LogoutDialogComponent} from "../logout-dialog/logout-dialog.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();
  @Output() userLogoutEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  openDrawerEventCreate() {
    this.openDrawerEvent.emit();
  }


  openLogout(): void {
      const logoutRef = this.matDialog.open(LogoutDialogComponent);
      logoutRef.afterClosed().subscribe((result) => {
        if(result === true){
          this.userLogout();
        }
      });
  }

  userLogout(): void{
    this.userLogoutEvent.emit();
  }
}
