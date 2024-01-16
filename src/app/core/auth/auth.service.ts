import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private token = 'token example';
  private user = { id: 1, name: 'Pippo', isAdmin: false };

  constructor() {}

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  isUserAuthenticated(): boolean {
    return !!this.user;
  }

  isUserAdmin(): boolean {
    return this.user.isAdmin;
  }
}
