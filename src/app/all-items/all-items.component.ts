import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {AddItemDialogComponent} from "../add-item-dialog/add-item-dialog.component";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  openAdd(): void {
    const addRef = this.matDialog.open(AddItemDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  openDrawerEventCreate() {
    this.openDrawerEvent.emit();
  }
}
