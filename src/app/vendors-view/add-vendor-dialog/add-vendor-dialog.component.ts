import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor-dialog.component.html',
  styleUrls: ['./add-vendor-dialog.component.css']
})
export class AddVendorDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddVendorDialogComponent>);

  onAddClick(): void {
    this.infoRef.close();
  }
}
