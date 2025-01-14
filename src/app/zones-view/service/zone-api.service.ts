import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {CreateZoneData} from "../request-models/create-zone-data";
import {ZoneData} from "../response-models/zone-data";

@Injectable({
  providedIn: 'root'
})
export class ZoneApiService {

  private accessApiUrl = 'http://localhost:8081/zone';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  createZone(createZoneData: CreateZoneData): Observable<ApiResponse<ZoneData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<ZoneData[]>>(`${this.accessApiUrl}/create-zone`, createZoneData, {headers})
  }

  getAllZones(storeId: number): Observable<ApiResponse<ZoneData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<ZoneData[]>>(`${this.accessApiUrl}/get-zones?storeId=${storeId}`, {headers});
  }
}
