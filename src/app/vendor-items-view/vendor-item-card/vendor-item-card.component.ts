import {Component, Input} from '@angular/core';
import {VendorItemData} from "../response-models/vendor-item-data";

@Component({
  selector: 'app-vendor-item-card',
  templateUrl: './vendor-item-card.component.html',
  styleUrls: ['./vendor-item-card.component.css']
})
export class VendorItemCardComponent {
  @Input() vendorItem!: VendorItemData;

}
