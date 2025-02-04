export interface CreateItemData {
  storeId: number ;
  itemName: string;
  minQuantity: number;
  zoneIds: number[];
  vendorIds: number[];
}
