import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {ZoneItemData} from "../response-models/zone-item-data";
import {ZoneItemCountData} from "../response-models/zone-item-count-data";
import {CreateZoneData} from "../../zones-view/request-models/create-zone-data";
import {ZoneData} from "../../zones-view/response-models/zone-data";
import {UpdateZoneItemCountData} from "../request-models/update-zone-item-count-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ZoneItemCountApiService {
  private accessApiUrl = environment.inventoryApiBaseUrl+'/item-count';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  updateZoneItemCount(updateZoneItemCountData: UpdateZoneItemCountData): Observable<ApiResponse<ZoneItemCountData>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<ZoneItemCountData>>(`${this.accessApiUrl}/update-zone-item-count`, updateZoneItemCountData, {headers})
  }
}
