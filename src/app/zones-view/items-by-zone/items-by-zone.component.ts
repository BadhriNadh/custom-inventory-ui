import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SessionStorageService} from "../../memory/session-storage.service";
import {StoreData} from "../../stores-view/response-models/store-data";
import {ZoneData} from "../response-models/zone-data";
import {ZoneApiService} from "../service/zone-api.service";

@Component({
  selector: 'app-items-by-zone',
  templateUrl: './items-by-zone.component.html',
  styleUrls: ['./items-by-zone.component.css']
})
export class ItemsByZoneComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  selectedZone: ZoneData | undefined;

  constructor(
    private sessionStorageService: SessionStorageService,
    private zoneApiService:ZoneApiService)
  {}
  storeName: string | null = null;

  ngOnInit(): void {
    this.storeName = this.sessionStorageService.getItem<StoreData>('store')!.storeName
    this.loadZones();
  }

  zones: ZoneData[] = [];

  private loadZones(){
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

  // Adding item to zone
  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe(() => {
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
