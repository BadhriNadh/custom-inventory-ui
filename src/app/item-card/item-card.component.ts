import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ItemInfoDialogComponent} from "../item-info-dialog/item-info-dialog.component";
import {CountSubmitDialogComponent} from "../count-submit-dialog/count-submit-dialog.component";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
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
