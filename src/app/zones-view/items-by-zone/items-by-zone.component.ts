import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-items-by-zone',
  templateUrl: './items-by-zone.component.html',
  styleUrls: ['./items-by-zone.component.css']
})
export class ItemsByZoneComponent {

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
