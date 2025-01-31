import {Component, Input} from '@angular/core';
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {VendorData} from "../response-models/vendor-data";

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent {
  @Input() vendor!: VendorData;
}
