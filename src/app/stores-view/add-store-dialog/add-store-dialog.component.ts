import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-store-dialog',
  templateUrl: './add-store-dialog.component.html',
  styleUrls: ['./add-store-dialog.component.css']
})
export class AddStoreDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddStoreDialogComponent>);

  onAddClick(): void {
    this.infoRef.close();
  }
}
