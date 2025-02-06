import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {VendorItemData} from "../response-models/vendor-item-data";

@Injectable({
  providedIn: 'root'
})
export class VendorItemsApiService {

  private accessApiUrl = 'http://localhost:8081/vendor-item';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  getAllVendorItems(vendorId: number): Observable<ApiResponse<VendorItemData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<VendorItemData[]>>(`${this.accessApiUrl}/get-vendor-items?vendorId=${vendorId}`, {headers});
  }
}
