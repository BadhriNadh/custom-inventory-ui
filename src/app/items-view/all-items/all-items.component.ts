import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddZoneDialogComponent} from "../../zones-view/add-zone-dialog/add-zone-dialog.component";
import {AddItemDialogComponent} from "../add-item-dialog/add-item-dialog.component";
import {SessionStorageService} from "../../memory/session-storage.service";
import {ZoneApiService} from "../../zones-view/service/zone-api.service";
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {ItemApiService} from "../service/item-api.service";
import {ItemData} from "../response-models/item-data";
import {StoreData} from "../../stores-view/response-models/store-data";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();
  readonly matDialog = inject(MatDialog);

  constructor(
    private sessionStorageService: SessionStorageService,
    private itemApiService: ItemApiService
  ){}

  items: ItemData[] = [];

  ngOnInit(): void {
    this.loadItems();
  }

  private loadItems() {
    const cachedItems = this.sessionStorageService.getItem<ItemData[]>('all-items');

    if (cachedItems && cachedItems.length > 0) {
      this.items = cachedItems;
    } else {
      this.itemApiService.getAllItems(this.sessionStorageService.getItem<StoreData>('store')!.storeId).subscribe({
        next: (response) => {
          if (response.data && response.data.length > 0) {
            this.items = response.data;
            this.sessionStorageService.setItem('all-items', this.items);
          }
        },
        error: (err) => {
          console.error('Error fetching items:', err);
        }
      });
    }
  }


  openAdd(): void {
    const addRef = this.matDialog.open(AddItemDialogComponent);

    addRef.afterClosed().subscribe((result) => {
      if(result === true){
        this.loadItems();
      }
    });
  }

  toggleMenuEventEmit() {
    this.toggleMenuEvent.emit();
  }
}
