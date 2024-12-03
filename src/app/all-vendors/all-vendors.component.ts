import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css']
})
export class AllVendorsComponent {
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
