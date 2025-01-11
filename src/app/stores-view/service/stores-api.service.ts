import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {StoreData} from "../response-models/store-data";
import {CreateStoreData} from "../request-models/create-store-data";
import {CookieStorageService} from "../../memory/cookie-storage.service";

@Injectable({
  providedIn: 'root'
})
export class StoresApiService {

  private accessApiUrl = 'http://localhost:8081/store';



  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  createStore(createStoreData: CreateStoreData): Observable<ApiResponse<StoreData>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<StoreData>>(`${this.accessApiUrl}/create-store`, createStoreData, {headers})
  }

  getStore(storeId: number): Observable<ApiResponse<StoreData>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });

    return this.http.get<ApiResponse<StoreData>>(`${this.accessApiUrl}/get-store?storeId=${storeId}`, { headers });
  }

  getAllStores(userId: number): Observable<ApiResponse<StoreData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<StoreData[]>>(`${this.accessApiUrl}/get-stores?userId=${userId}`, {headers});
  }

}
