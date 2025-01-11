import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  private tokenKey = 'hash-authToken';
  private userIdKey = 'hash-userId';

  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Expire time in days
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  private getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  private eraseCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  saveLoginData(token: string | undefined, userId: number | undefined, days: number = 7): boolean {
    if (token && userId) {
      this.setCookie(this.tokenKey, token, days);
      this.setCookie(this.userIdKey, userId.toString(), days);
      return true;
    }
    return false;
  }

  getLoginToken(): string | null {
    return this.getCookie(this.tokenKey);
  }

  getLoginUserId(): number | null {
    const userId = this.getCookie(this.userIdKey);
    return userId ? parseInt(userId, 10) : null;
  }

  clearLoginData(): void {
    this.eraseCookie(this.tokenKey);
    this.eraseCookie(this.userIdKey);
  }
}
