import {Component, Input} from '@angular/core';
import {ItemData} from "../response-models/item-data";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() item!: ItemData;
}
