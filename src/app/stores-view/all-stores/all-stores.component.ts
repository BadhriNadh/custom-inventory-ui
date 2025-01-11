import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {AddStoreDialogComponent} from "../add-store-dialog/add-store-dialog.component";
import {StoresApiService} from "../service/stores-api.service";
import {SessionStorageService} from "../../memory/session-storage.service";
import {StoreData} from "../response-models/store-data";
import {CookieStorageService} from "../../memory/cookie-storage.service";

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent {
  @Output() openStoreEvent = new EventEmitter();
  readonly matDialog = inject(MatDialog);

  constructor(
    private storesApiService: StoresApiService,
    private cookieStorageService: CookieStorageService
  ){}

  stores: StoreData[] = [];

  ngOnInit(): void {
    this.loadStores();
  }

  loadStores(): void {
    this.storesApiService.getAllStores(this.cookieStorageService.getLoginUserId()!).subscribe({
      next: (response) => {
        this.stores = response.data && response.data.length > 0 ? response.data : this.stores
      },
      error: (err) => {
        console.error('Error fetching stores:', err)
      }
    });
  }

  openAdd(): void {
    const addRef = this.matDialog.open(AddStoreDialogComponent);
    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.storeSelected();
      }
    });
  }

  storeSelected() {
    this.openStoreEvent.emit()
  }
}
