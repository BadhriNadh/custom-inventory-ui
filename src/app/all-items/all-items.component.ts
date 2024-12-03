import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {
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
