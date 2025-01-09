import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private tokenKey = 'hash-authToken';
  private userIdKey = 'hash-userId';

  saveLoginData(token: string | undefined, userId: number | undefined): boolean {
    if (token && userId) {
      sessionStorage.setItem(this.tokenKey, token);
      sessionStorage.setItem(this.userIdKey, userId.toString());
      return true;
    }
    return false;
  }

  getLoginToken(): string | null {
    const token = sessionStorage.getItem(this.tokenKey);
    return token ? token : null;  // Return null if token doesn't exist
  }

  getLoginUserId(): number | null {
    const userId = sessionStorage.getItem(this.userIdKey);
    return userId ? parseInt(userId, 10) : null;  // Parse the userId and return as a number
  }

  clearLoginData(): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userIdKey);
  }
}
