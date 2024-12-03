import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-draw',
  templateUrl: './menu-draw.component.html',
  styleUrls: ['./menu-draw.component.css']
})
export class MenuDrawComponent {
  @Output() menuSelectEvent = new EventEmitter<string>();

  menuSelectValue: string = 'zone';

  onVendorViewClick() {
    this.menuSelectValue = 'vendor';
    this.menuSelectEvent.emit(this.menuSelectValue);
  }

  onZoneViewClick() {
    this.menuSelectValue = 'zone';
    this.menuSelectEvent.emit(this.menuSelectValue);
  }

  onAllItemsViewClick() {
    this.menuSelectValue = 'allItems';
    this.menuSelectEvent.emit(this.menuSelectValue);
  }

  onAllVendorsViewClick() {
    this.menuSelectValue = 'allVendors';
    this.menuSelectEvent.emit(this.menuSelectValue);
  }

  onAllZonesViewClick() {
    this.menuSelectValue = 'allZones';
    this.menuSelectEvent.emit(this.menuSelectValue);
  }
}
