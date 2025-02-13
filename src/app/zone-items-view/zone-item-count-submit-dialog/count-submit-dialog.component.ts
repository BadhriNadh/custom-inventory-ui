import {Component, Inject, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ZoneItemCountApiService} from "../service/zone-item-count-api.service";
import {UpdateZoneItemCountData} from "../request-models/update-zone-item-count-data";

@Component({
  selector: 'app-count-submit-dialog',
  templateUrl: './count-submit-dialog.component.html',
  styleUrls: ['./count-submit-dialog.component.css']
})
export class CountSubmitDialogComponent {
  constructor(
    public zoneItemCountApiService:ZoneItemCountApiService,
    public submitRef: MatDialogRef<CountSubmitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public itemCountData: any
  ) {}

  onSaveClick() {
    const updateZoneItemCountData: UpdateZoneItemCountData = {
      itemId: this.itemCountData.zoneItem.itemId,
      zoneId: this.itemCountData.zoneItem.zoneId,
      quantity: this.itemCountData.zoneItem.quantity+this.itemCountData.countChange,
      zoneCount: this.itemCountData.zoneItem.zoneCount+this.itemCountData.countChange
    }

    this.zoneItemCountApiService.updateZoneItemCount(updateZoneItemCountData).subscribe({
      next: (response) => {
        if(response.status === 202){
          this.submitRef.close(response.data);
        }
      },
      error: (error) => {
        console.log('Count failed');
      },
    });

  }
}
