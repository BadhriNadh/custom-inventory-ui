import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {User} from "../../request-models/user";
import {ApiResponse} from "../../../models/api-response";
import {LoginData} from "../../response-models/login-data";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {

  private accessApiUrl = environment.accessApiBaseUrl+'/user';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.accessApiUrl}/register`, user)
  }

  loginUser(user:  User): Observable<ApiResponse<LoginData>> {
    const basicAuthHeader = 'Basic ' + btoa(`${user.userName}:${user.password}`);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });

    return this.http.get<ApiResponse<LoginData>>(`${this.accessApiUrl}/login`, { headers })
  }
}
