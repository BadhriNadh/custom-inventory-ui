import {Component, inject, signal} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {StoresApiService} from "../../stores-view/service/stores-api.service";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {SessionStorageService} from "../../memory/session-storage.service";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CreateStoreData} from "../../stores-view/request-models/create-store-data";
import {CreateZoneData} from "../request-models/create-zone-data";
import {ZoneApiService} from "../service/zone-api.service";
import {StoreData} from "../../stores-view/response-models/store-data";

@Component({
  selector: 'app-add',
  templateUrl: './add-zone-dialog.component.html',
  styleUrls: ['./add-zone-dialog.component.css']
})
export class AddZoneDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddZoneDialogComponent>);

  readonly zoneName = new FormControl('', [Validators.required]);

  errorZoneNameMessage = signal('');

  constructor(
    private zoneApiService: ZoneApiService,
    private sessionStorageService: SessionStorageService
  ){
    merge(this.zoneName.statusChanges, this.zoneName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateZoneNameErrorMessage();
      });
  }

  updateZoneNameErrorMessage() {
    if (this.zoneName.hasError('required')) {
      this.errorZoneNameMessage.set('You must enter zone name');
    }else{
      this.errorZoneNameMessage.set('');
    }
  }

  onAddClick(): void {
    if (this.zoneName.invalid ) {
      return;
    }

    const createStoreData: CreateZoneData = {
      storeId: this.sessionStorageService.getItem<StoreData>('store')!.storeId,
      zoneName: this.zoneName.value!,
    };

    this.zoneApiService.createZone(createStoreData).subscribe({
      next: (response) => {
        if(response.status === 201){
          this.sessionStorageService.setItem('all-zones', response.data!)
          this.infoRef.close(true);
        }
      },
      error: (error) => {
        console.log('Zone not created');
      },
    });


  }
}
