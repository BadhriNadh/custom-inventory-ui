import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add-zone-dialog.component.html',
  styleUrls: ['./add-zone-dialog.component.css']
})
export class AddZoneDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddZoneDialogComponent>);

  onAddClick(): void {
    this.infoRef.close();
  }
}
