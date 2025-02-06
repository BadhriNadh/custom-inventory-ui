import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {VendorData} from "../../vendors-view/response-models/vendor-data";
import {StoreData} from "../../stores-view/response-models/store-data";
import {SessionStorageService} from "../../memory/session-storage.service";
import {VendorService} from "../../service/vendor.service";
import {ItemData} from "../../items-view/response-models/item-data";
import {VendorItemsApiService} from "../service/vendor-items-api.service";
import {VendorItemData} from "../response-models/vendor-item-data";

@Component({
  selector: 'app-items-by-vendor',
  templateUrl: './items-by-vendor.component.html',
  styleUrls: ['./items-by-vendor.component.css']
})
export class ItemsByVendorComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  selectedVendor: VendorData | undefined;
  vendors: VendorData[] = [];
  storeName: string | null = null;
  vendorItems: VendorItemData[] = [];

  constructor(
    private sessionStorageService: SessionStorageService,
    private vendorService: VendorService,
    private vendorItemsApiService: VendorItemsApiService
  ){}

  ngOnInit(): void {
    this.storeName = this.sessionStorageService.getItem<StoreData>('store')!.storeName
    this.vendorService.loadVendors();
    this.vendorService.vendors$.subscribe(vendors => this.vendors = vendors);
  }

  // Adding item to vendor
  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }

  loadVendorItems() {
    this.vendorItemsApiService.getAllVendorItems(this.selectedVendor!.vendorId).subscribe({
      next: (response) => {
        if (response.data && response.data.length > 0) {
          this.vendorItems = response.data;
        }
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }
}
