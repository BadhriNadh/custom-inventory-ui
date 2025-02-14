import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieStorageService} from "../../memory/cookie-storage.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {CreateItemData} from "../request-models/create-item-data";
import {ItemData} from "../response-models/item-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  private apiUrl = environment.inventoryApiBaseUrl+'/item';

  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) { }

  createItem(createItemData: CreateItemData): Observable<ApiResponse<ItemData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.post<ApiResponse<ItemData[]>>(`${this.apiUrl}/create-item`, createItemData, {headers})
  }


  getAllItems(storeId: number): Observable<ApiResponse<ItemData[]>> {
    const basicAuthHeader = 'Bearer ' + this.cookieStorageService.getLoginToken();

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });
    return this.http.get<ApiResponse<ItemData[]>>(`${this.apiUrl}/get-items?storeId=${storeId}`, {headers});
  }
}
