import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {CreateZoneData} from "../request-models/create-zone-data";
import {ZoneData} from "../response-models/zone-data";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ZoneApiService {

  private apiUrl = environment.inventoryApiBaseUrl+'/zone';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  createZone(createZoneData: CreateZoneData): Observable<ApiResponse<ZoneData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<ZoneData[]>>(`${this.apiUrl}/create-zone`, createZoneData, {headers})
  }

  getAllZones(storeId: number): Observable<ApiResponse<ZoneData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<ZoneData[]>>(`${this.apiUrl}/get-zones?storeId=${storeId}`, {headers});
  }
}
