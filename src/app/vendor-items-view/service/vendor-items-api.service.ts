import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {VendorItemData} from "../response-models/vendor-item-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VendorItemsApiService {

  private apiUrl = environment.inventoryApiBaseUrl+'/vendor-item';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  getAllVendorItems(vendorId: number): Observable<ApiResponse<VendorItemData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<VendorItemData[]>>(`${this.apiUrl}/get-vendor-items?vendorId=${vendorId}`, {headers});
  }
}
