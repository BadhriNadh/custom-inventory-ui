import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddItemDialogComponent>);

  onAddClick(): void {
    this.infoRef.close();
  }
}
