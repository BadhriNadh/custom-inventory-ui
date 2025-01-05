import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../request-models/user.model";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../../response-models/api-response.model";
import {LoginData} from "../../response-models/login-data.model";

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {

  private accessApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.accessApiUrl}/user/register`, user).pipe(
      map(response => {
        return new ApiResponse<string>(
          "",
          response.status,
          response.message
        )
      })
    );
  }

  loginUser(user:  User): Observable<ApiResponse<LoginData>> {
    const basicAuthHeader = 'Basic ' + btoa(`${user.userName}:${user.password}`);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });

    return this.http.get<ApiResponse<LoginData>>(`${this.accessApiUrl}/user/login`, { headers }).pipe(
      map(response => {
        return new ApiResponse<LoginData>(
          new LoginData(response.data.token, response.data.userId),
          response.status,
          response.message
        );
      })
    );
  }
}
