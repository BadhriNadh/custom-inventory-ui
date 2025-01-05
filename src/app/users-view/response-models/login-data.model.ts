export class LoginData {
  private static tokenKey = 'hash-authToken';
  private static userIdKey = 'hash-userId';

  constructor(
    public token: string,
    public userId: number
  ) {}

  saveLoginData(): boolean {
    if (this.token && this.userId) {
      sessionStorage.setItem(LoginData.tokenKey, this.token);
      sessionStorage.setItem(LoginData.userIdKey, this.userId.toString());
      return true;
    }
    return false;
  }

  static getLoginToken(): string | null {
    const token = sessionStorage.getItem(LoginData.tokenKey);
    return token ? token : null;  // Return null if token doesn't exist
  }

  static getLoginUserId(): number | null {
    const userId = sessionStorage.getItem(LoginData.userIdKey);
    return userId ? parseInt(userId, 10) : null;  // Parse the userId and return as a number
  }

  static clearLoginData(): void {
    sessionStorage.removeItem(LoginData.tokenKey);
    sessionStorage.removeItem(LoginData.userIdKey);
  }
}

