import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {

  private accessApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.accessApiUrl}/user/register`, user);
  }

  loginUser(user:  User): Observable<any> {
    const basicAuthHeader = 'Basic ' + btoa(`${user.userName}:${user.password}`);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeader,
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.accessApiUrl}/user/login`, { headers });
  }
}
