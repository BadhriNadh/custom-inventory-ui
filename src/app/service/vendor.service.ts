import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {VendorData} from "../vendors-view/response-models/vendor-data";
import {SessionStorageService} from "../memory/session-storage.service";
import {VendorApiService} from "../vendors-view/service/vendor-api.service";
import {StoreData} from "../stores-view/response-models/store-data";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private vendorsSubject = new BehaviorSubject<VendorData[]>([]);
  vendors$ = this.vendorsSubject.asObservable();

  constructor(
    private sessionStorageService: SessionStorageService,
    private vendorApiService: VendorApiService
  ) {}

  loadVendors(): void {
    const cachedVendors = this.sessionStorageService.getItem<VendorData[]>('all-vendors');

    if (cachedVendors && cachedVendors.length > 0) {
      this.vendorsSubject.next(cachedVendors);
    } else {
      const store = this.sessionStorageService.getItem<StoreData>('store');
      if (store) {
        this.vendorApiService.getAllVendors(store.storeId).subscribe({
          next: (response) => {
            if (response.data && response.data.length > 0) {
              this.vendorsSubject.next(response.data);
              this.sessionStorageService.setItem('all-vendors', response.data);
            }
          },
          error: (err) => {
            console.error('Error fetching vendors:', err);
          }
        });
      }
    }
  }
}

