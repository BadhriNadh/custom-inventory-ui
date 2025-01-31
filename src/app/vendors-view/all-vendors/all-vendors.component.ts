import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {AddVendorDialogComponent} from "../add-vendor-dialog/add-vendor-dialog.component";
import {SessionStorageService} from "../../memory/session-storage.service";
import {ZoneApiService} from "../../zones-view/service/zone-api.service";
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {VendorApiService} from "../service/vendor-api.service";
import {VendorData} from "../response-models/vendor-data";
import {StoreData} from "../../stores-view/response-models/store-data";

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css']
})
export class AllVendorsComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  constructor(
    private sessionStorageService: SessionStorageService,
    private vendorApiService: VendorApiService
  ){}

  vendors: VendorData[] = [];

  ngOnInit(): void {
    this.loadVendors();
  }

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

  openAdd(): void {
    const addRef = this.matDialog.open(AddVendorDialogComponent);

    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.loadVendors();
      }
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
