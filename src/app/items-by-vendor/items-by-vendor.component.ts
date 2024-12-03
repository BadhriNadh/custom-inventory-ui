import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-items-by-vendor',
  templateUrl: './items-by-vendor.component.html',
  styleUrls: ['./items-by-vendor.component.css']
})
export class ItemsByVendorComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  openAdd(): void {
    const addRef = this.matDialog.open(AddComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleDrawer() {
    this.openDrawerEvent.emit();
  }
}
