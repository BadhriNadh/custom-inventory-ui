import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {StoreData} from "../../stores-view/response-models/store-data";
import {ZoneData} from "../response-models/zone-data";
import {StoresApiService} from "../../stores-view/service/stores-api.service";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {SessionStorageService} from "../../memory/session-storage.service";
import {ZoneApiService} from "../service/zone-api.service";

@Component({
  selector: 'app-all-zones',
  templateUrl: './all-zones.component.html',
  styleUrls: ['./all-zones.component.css']
})
export class AllZonesComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  constructor(
    private sessionStorageService: SessionStorageService,
    private zoneApiService: ZoneApiService
  ){}

  zones: ZoneData[] = [];

  ngOnInit(): void {
    this.loadZones();
  }

  private loadZones() {
    const cachedZones = this.sessionStorageService.getItem<ZoneData[]>('all-zones');

    if (cachedZones && cachedZones.length > 0) {
      this.zones = cachedZones;
    } else {
      this.zoneApiService.getAllZones(this.sessionStorageService.getItem<StoreData>('store')!.storeId).subscribe({
        next: (response) => {
          if (response.data && response.data.length > 0) {
            this.zones = response.data;
            this.sessionStorageService.setItem('all-zones', this.zones);
          }
        },
        error: (err) => {
          console.error('Error fetching zones:', err);
        }
      });
    }
  }


  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.loadZones();
      }
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
