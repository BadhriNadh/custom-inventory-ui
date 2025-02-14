import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {VendorItemData} from "../../vendor-items-view/response-models/vendor-item-data";
import {ZoneItemData} from "../response-models/zone-item-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ZoneItemsApiService {

  private apiUrl = environment.inventoryApiBaseUrl+'/zone-item';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  getAllZoneItems(zoneId: number): Observable<ApiResponse<ZoneItemData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<ZoneItemData[]>>(`${this.apiUrl}/get-zone-items?zoneId=${zoneId}`, {headers});
  }
}
