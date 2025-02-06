import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {ZoneService} from "../../service/zone.service";
import {SessionStorageService} from "../../memory/session-storage.service";
import {StoreData} from "../../stores-view/response-models/store-data";
import {ZoneItemsApiService} from "../service/zone-items-api.service";
import {ZoneItemData} from "../response-models/zone-item-data";

@Component({
  selector: 'app-items-by-zone',
  templateUrl: './items-by-zone.component.html',
  styleUrls: ['./items-by-zone.component.css']
})
export class ItemsByZoneComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  selectedZone: ZoneData | undefined;

  storeName: string | null = null;

  zones: ZoneData[] = [];

  zoneItems: ZoneItemData[] = [];

  constructor(
    private zoneService: ZoneService,
    private sessionStorageService: SessionStorageService,
    private zoneItemsApiService: ZoneItemsApiService
  ) {}

  ngOnInit(): void {
    this.storeName = this.sessionStorageService.getItem<StoreData>('store')!.storeName
    this.zoneService.loadZones();
    this.zoneService.zones$.subscribe(zones => this.zones = zones);
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

  loadZoneItems() {
    this.zoneItemsApiService.getAllZoneItems(this.selectedZone!.zoneId).subscribe({
      next: (response) => {
        if (response.data && response.data.length > 0) {
          this.zoneItems = response.data;
        }
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }
}
