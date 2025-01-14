import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StoreData} from "../response-models/store-data";
import {SessionStorageService} from "../../memory/session-storage.service";

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent {
  @Input() store!: StoreData;
  @Output() openStoreCardEvent = new EventEmitter();
  constructor(private sessionStorageService: SessionStorageService) {
  }

  openStore() {
    //TODO rm this
    this.sessionStorageService.clear()
    this.sessionStorageService.setItem('store', this.store)
    this.openStoreCardEvent.emit()
  }
}
