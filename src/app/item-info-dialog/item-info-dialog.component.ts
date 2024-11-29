import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info-dialog.component.html',
  styleUrls: ['./item-info-dialog.component.css']
})
export class ItemInfoDialogComponent {
  readonly infoRef = inject(MatDialogRef<ItemInfoDialogComponent>);

  onCloseClick(): void {
    this.infoRef.close();
  }
}
