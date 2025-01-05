import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {AddVendorDialogComponent} from "../add-vendor-dialog/add-vendor-dialog.component";

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css']
})
export class AllVendorsComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  openAdd(): void {
    const addRef = this.matDialog.open(AddVendorDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
