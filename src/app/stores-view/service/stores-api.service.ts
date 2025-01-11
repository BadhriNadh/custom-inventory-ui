import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api-response";
import {StoreData} from "../response-models/store-data";
import {CreateStoreData} from "../request-models/create-store-data";

@Injectable({
  providedIn: 'root'
})
export class StoresApiService {

  private accessApiUrl = 'http://localhost:8081/store';

  constructor(private http: HttpClient) { }

  createStore(createStoreData: CreateStoreData): Observable<ApiResponse<StoreData>> {
    return this.http.post<ApiResponse<StoreData>>(`${this.accessApiUrl}/create-store`, createStoreData)
  }

  getStore(storeId: number): Observable<ApiResponse<StoreData>> {
    return this.http.get<ApiResponse<StoreData>>(`${this.accessApiUrl}/get-store/${storeId}`);
  }

  getAllStores(userId: number): Observable<ApiResponse<StoreData[]>> {
    return this.http.get<ApiResponse<StoreData[]>>(`${this.accessApiUrl}/get-stores/${userId}`);
  }

}
