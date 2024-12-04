import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneComponent} from "../add-zone/add-zone.component";
import {MatDialog} from "@angular/material/dialog";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-items-by-zone',
  templateUrl: './items-by-zone.component.html',
  styleUrls: ['./items-by-zone.component.css']
})
export class ItemsByZoneComponent {

  @Output() openDrawerEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleDrawer() {
    this.openDrawerEvent.emit();
  }
}
