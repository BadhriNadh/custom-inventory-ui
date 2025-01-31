import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {VendorData} from "../response-models/vendor-data";
import {StoreData} from "../../stores-view/response-models/store-data";
import {SessionStorageService} from "../../memory/session-storage.service";
import {VendorApiService} from "../service/vendor-api.service";

@Component({
  selector: 'app-items-by-vendor',
  templateUrl: './items-by-vendor.component.html',
  styleUrls: ['./items-by-vendor.component.css']
})
export class ItemsByVendorComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  selectedVendor: VendorData | undefined;

  constructor(
    private sessionStorageService: SessionStorageService,
    private vendorApiService:VendorApiService)
  {}
  storeName: string | null = null;

  ngOnInit(): void {
    this.storeName = this.sessionStorageService.getItem<StoreData>('store')!.storeName
    this.loadVendors();
  }

  vendors: VendorData[] = [];

  private loadVendors() {
    const cachedVendors = this.sessionStorageService.getItem<VendorData[]>('all-vendors');

    if (cachedVendors && cachedVendors.length > 0) {
      this.vendors = cachedVendors;
    } else {
      this.vendorApiService.getAllVendors(this.sessionStorageService.getItem<StoreData>('store')!.storeId).subscribe({
        next: (response) => {
          if (response.data && response.data.length > 0) {
            this.vendors = response.data;
            this.sessionStorageService.setItem('all-vendors', this.vendors);
          }
        },
        error: (err) => {
          console.error('Error fetching vendors:', err);
        }
      });
    }
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
}
