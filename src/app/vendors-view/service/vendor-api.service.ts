import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {CreateVendorData} from "../request-models/create-vendor-data";
import {VendorData} from "../response-models/vendor-data";
import {VendorItemData} from "../../vendor-items-view/response-models/vendor-item-data";

@Injectable({
  providedIn: 'root'
})
export class VendorApiService {

  private accessApiUrl = 'http://localhost:8081/vendor';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  createVendor(createVendorData: CreateVendorData): Observable<ApiResponse<VendorData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<VendorData[]>>(`${this.accessApiUrl}/create-vendor`, createVendorData, {headers})
  }

  getAllVendors(storeId: number): Observable<ApiResponse<VendorData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<VendorData[]>>(`${this.accessApiUrl}/get-vendors?storeId=${storeId}`, {headers});
  }
}
