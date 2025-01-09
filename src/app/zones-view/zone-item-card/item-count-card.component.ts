import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ItemInfoDialogComponent} from "../zone-item-info-dialog/item-info-dialog.component";
import {CountSubmitDialogComponent} from "../zone-item-count-submit-dialog/count-submit-dialog.component";

@Component({
  selector: 'app-item-count-card',
  templateUrl: './item-count-card.component.html',
  styleUrls: ['./item-count-card.component.css']
})
export class ItemCountCardComponent {
  readonly matDialog = inject(MatDialog);

  openInfo(): void {
    const infoRef = this.matDialog.open(ItemInfoDialogComponent);

    infoRef.afterClosed().subscribe(result => {
    });
  }

  openSubmit(): void {
    const submitRef = this.matDialog.open(CountSubmitDialogComponent);

    submitRef.afterClosed().subscribe(result => {
    });
  }

}
