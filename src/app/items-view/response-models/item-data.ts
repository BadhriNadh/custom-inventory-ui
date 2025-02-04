import {VendorData} from "../../vendors-view/response-models/vendor-data";
import {ZoneData} from "../../zones-view/response-models/zone-data";

export interface ItemData {
  itemId: number ;
  itemName: string;
  quantity: number;
  minQuantity: number;
  zoneResponses: ZoneData[];
  vendorResponse: VendorData[];
}
