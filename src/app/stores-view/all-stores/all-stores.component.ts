import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {AddStoreDialogComponent} from "../add-store-dialog/add-store-dialog.component";

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent {
  readonly matDialog = inject(MatDialog);

  openAdd(): void {
    const addRef = this.matDialog.open(AddStoreDialogComponent);
    addRef.afterClosed().subscribe(() => {
    });
  }


}
