import {Component, Input} from '@angular/core';
import {ZoneData} from "../response-models/zone-data";

@Component({
  selector: 'app-zone-card',
  templateUrl: './zone-card.component.html',
  styleUrls: ['./zone-card.component.css']
})
export class ZoneCardComponent {
  @Input() zone!: ZoneData;
}
