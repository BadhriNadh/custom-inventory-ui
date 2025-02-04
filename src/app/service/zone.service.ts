import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ZoneData} from "../zones-view/response-models/zone-data";
import {SessionStorageService} from "../memory/session-storage.service";
import {ZoneApiService} from "../zones-view/service/zone-api.service";
import {StoreData} from "../stores-view/response-models/store-data";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private zonesSubject = new BehaviorSubject<ZoneData[]>([]);
  zones$ = this.zonesSubject.asObservable();

  constructor(
    private sessionStorageService: SessionStorageService,
    private zoneApiService: ZoneApiService
  ) {}

  loadZones(): void {
    const cachedZones = this.sessionStorageService.getItem<ZoneData[]>('all-zones');

    if (cachedZones && cachedZones.length > 0) {
      this.zonesSubject.next(cachedZones);
    } else {
      const store = this.sessionStorageService.getItem<StoreData>('store');
      if (store) {
        this.zoneApiService.getAllZones(store.storeId).subscribe({
          next: (response) => {
            if (response.data && response.data.length > 0) {
              this.zonesSubject.next(response.data);
              this.sessionStorageService.setItem('all-zones', response.data);
            }
          },
          error: (err) => {
            console.error('Error fetching zones:', err);
          }
        });
      }
    }
  }
}
