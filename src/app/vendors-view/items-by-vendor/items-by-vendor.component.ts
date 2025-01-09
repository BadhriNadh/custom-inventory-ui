import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";

@Component({
  selector: 'app-items-by-vendor',
  templateUrl: './items-by-vendor.component.html',
  styleUrls: ['./items-by-vendor.component.css']
})
export class ItemsByVendorComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
