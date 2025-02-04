import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../add-zone-dialog/add-zone-dialog.component";
import {ZoneData} from "../response-models/zone-data";
import {ZoneService} from "../../service/zone.service";

@Component({
  selector: 'app-all-zones',
  templateUrl: './all-zones.component.html',
  styleUrls: ['./all-zones.component.css']
})
export class AllZonesComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  zones: ZoneData[] = [];

  constructor(private zoneService: ZoneService) {}

  ngOnInit(): void {
    this.zoneService.loadZones();
    this.zoneService.zones$.subscribe(zones => this.zones = zones);
  }


  openAdd(): void {
    const addRef = this.matDialog.open(AddZoneDialogComponent);

    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.zoneService.loadZones();
        this.zoneService.zones$.subscribe(zones => this.zones = zones);
      }
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
