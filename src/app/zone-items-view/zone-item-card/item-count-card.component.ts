import {Component, inject, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ItemInfoDialogComponent} from "../zone-item-info-dialog/item-info-dialog.component";
import {CountSubmitDialogComponent} from "../zone-item-count-submit-dialog/count-submit-dialog.component";
import {ZoneItemData} from "../response-models/zone-item-data";
import {StoreData} from "../../stores-view/response-models/store-data";
import {ZoneItemCountData} from "../response-models/zone-item-count-data";

@Component({
  selector: 'app-item-count-card',
  templateUrl: './item-count-card.component.html',
  styleUrls: ['./item-count-card.component.css']
})
export class ItemCountCardComponent {
  readonly matDialog = inject(MatDialog);
  @Input() zoneItem!: ZoneItemData;
  @Input() zoneId!: number;
  countChange: number = 0;
  updatedZoneCount: number = 0;

  ngOnInit() {
    this.updatedZoneCount = this.zoneItem.zoneCount;
  }

  openInfo(): void {
    const infoRef = this.matDialog.open(ItemInfoDialogComponent);

    infoRef.afterClosed().subscribe(result => {
    });
  }

  openSubmit(): void {
    const submitRef = this.matDialog.open(CountSubmitDialogComponent, {
      data: {
        countChange: this.countChange,
        zoneItem: this.zoneItem
      }
    });

    submitRef.afterClosed().subscribe((zoneItemCountData: ZoneItemCountData | undefined) => {
      if (!zoneItemCountData) {
        return;
      }

      this.zoneItem.zoneCount = zoneItemCountData.zoneCount;
      this.zoneItem.quantity = zoneItemCountData.quantity;
      this.countChange = 0;
    });
  }

  increaseCount() {
    this.countChange++;
    this.updatedZoneCount++;
  }

  decreaseCount() {
    if (this.zoneItem.zoneCount+this.countChange > 0) {
      this.countChange--;
      this.updatedZoneCount--;
    }
  }

  onZoneCountChange() {
      this.countChange = this.updatedZoneCount-this.zoneItem.zoneCount;
  }
}
