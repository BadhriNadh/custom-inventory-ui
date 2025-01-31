import {Component, inject, signal} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {SessionStorageService} from "../../memory/session-storage.service";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {VendorApiService} from "../service/vendor-api.service";
import {StoreData} from "../../stores-view/response-models/store-data";
import {CreateVendorData} from "../request-models/create-vendor-data";

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor-dialog.component.html',
  styleUrls: ['./add-vendor-dialog.component.css']
})
export class AddVendorDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddVendorDialogComponent>);

  readonly vendorName = new FormControl('', [Validators.required]);

  errorVendorNameMessage = signal('');

  constructor(
    private vendorApiService: VendorApiService,
    private sessionStorageService: SessionStorageService
  ){
    merge(this.vendorName.statusChanges, this.vendorName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateVendorNameErrorMessage();
      });
  }

  updateVendorNameErrorMessage() {
    if (this.vendorName.hasError('required')) {
      this.errorVendorNameMessage.set('You must enter vendor name');
    }else{
      this.errorVendorNameMessage.set('');
    }
  }

  onAddClick(): void {
    if (this.vendorName.invalid ) {
      return;
    }

    const createStoreData: CreateVendorData = {
      storeId: this.sessionStorageService.getItem<StoreData>('store')!.storeId,
      vendorName: this.vendorName.value!,
    };

    this.vendorApiService.createVendor(createStoreData).subscribe({
      next: (response) => {
        if(response.status === 201){
          this.sessionStorageService.setItem('all-vendors', response.data!)
          this.infoRef.close(true);
        }
      },
      error: (error) => {
        console.log('Vendor not created');
      },
    });
  }
}
