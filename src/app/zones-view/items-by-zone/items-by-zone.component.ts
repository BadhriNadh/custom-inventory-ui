import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ZoneData} from "../response-models/zone-data";
import {ZoneService} from "../../service/zone.service";
import {SessionStorageService} from "../../memory/session-storage.service";
import {StoreData} from "../../stores-view/response-models/store-data";

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

  constructor(
    private zoneService: ZoneService,
    private sessionStorageService: SessionStorageService,
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
}
