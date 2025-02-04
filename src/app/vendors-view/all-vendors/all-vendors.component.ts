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
import {VendorService} from "../../service/vendor.service";

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css']
})
export class AllVendorsComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  constructor(
    private vendorService: VendorService
  ){}

  vendors: VendorData[] = [];

  ngOnInit(): void {
    this.vendorService.loadVendors();
    this.vendorService.vendors$.subscribe(vendors => this.vendors = vendors);
  }

  openAdd(): void {
    const addRef = this.matDialog.open(AddVendorDialogComponent);

    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.vendorService.loadVendors();
        this.vendorService.vendors$.subscribe(vendors => this.vendors = vendors);
      }
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
