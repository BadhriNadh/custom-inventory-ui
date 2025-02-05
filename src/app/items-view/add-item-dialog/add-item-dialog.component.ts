import {Component, inject, signal} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {VendorData} from "../../vendors-view/response-models/vendor-data";
import {StoreData} from "../../stores-view/response-models/store-data";
import {SessionStorageService} from "../../memory/session-storage.service";
import {VendorService} from "../../service/vendor.service";
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {ZoneService} from "../../service/zone.service";
import {FormControl, Validators} from "@angular/forms";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CreateZoneData} from "../../zones-view/request-models/create-zone-data";
import {CreateItemData} from "../request-models/create-item-data";
import {ItemApiService} from "../service/item-api.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddItemDialogComponent>);

  constructor(
    private sessionStorageService: SessionStorageService,
    private itemApiService: ItemApiService,
    private vendorService: VendorService,
    private zoneService: ZoneService
  ){
    merge(this.itemName.statusChanges, this.itemName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateItemNameErrorMessage();
        this.updateMinQuantityErrorMessage();
      });

    merge(this.minQuantity.statusChanges, this.minQuantity.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateMinQuantityErrorMessage();
      });
  }

  readonly itemName = new FormControl('', [Validators.required]);
  readonly minQuantity = new FormControl('', [Validators.required, Validators.min(1)]);

  errorItemNameMessage = signal('');
  errorMinQuantityMessage = signal('');

  vendors: VendorData[] = [];
  zones: ZoneData[] = [];
  selectedZoneIds: number[] = [];
  selectedVendorIds: number[] = [];

  ngOnInit(): void {
    this.vendorService.loadVendors();
    this.vendorService.vendors$.subscribe(vendors => this.vendors = vendors);
    this.zoneService.loadZones();
    this.zoneService.zones$.subscribe(zones => this.zones = zones);
  }

  updateItemNameErrorMessage() {
    if (this.itemName.hasError('required')) {
      this.errorItemNameMessage.set('You must enter item name');
    }else{
      this.errorItemNameMessage.set('');
    }
  }

  updateMinQuantityErrorMessage() {
    if (this.minQuantity.hasError('required')) {
      this.errorMinQuantityMessage.set('You must enter min quantity');
    }else if (this.minQuantity.hasError('min')){
      this.errorMinQuantityMessage.set('You must enter min quantity more than 1');
    } else{
      this.errorMinQuantityMessage.set('');
    }
  }

  onAddClick(): void {
    if (this.itemName.invalid || this.minQuantity.invalid ) {
      return;
    }

    const createItemData: CreateItemData = {
      storeId: this.sessionStorageService.getItem<StoreData>('store')!.storeId,
      itemName: this.itemName.value!,
      minQuantity: parseInt(this.minQuantity.value!),
      zoneIds: this.selectedZoneIds,
      vendorIds: this.selectedVendorIds
    };

    this.itemApiService.createItem(createItemData).subscribe({
      next: (response) => {
        if(response.status === 201){
          this.sessionStorageService.setItem('all-items', response.data!)
          this.infoRef.close(true);
        }
      },
      error: (error) => {
        console.log('Zone not created');
      },
    });
  }
}
