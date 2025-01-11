import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AppComponent} from "../../app.component";
import {SessionStorageService} from "../../memory/session-storage.service";

@Component({
  selector: 'app-items-by-zone',
  templateUrl: './items-by-zone.component.html',
  styleUrls: ['./items-by-zone.component.css']
})
export class ItemsByZoneComponent {

  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);


  constructor(private sessionStorageService: SessionStorageService) {
  }
  storeName: string | null = null;

  ngOnInit(): void {
    this.storeName = this.sessionStorageService.getItem('storeName')
  }

  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
