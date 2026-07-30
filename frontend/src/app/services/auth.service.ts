import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Save the JWT token to Local Storage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Retrieve the saved JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Clear local storage on logout
  logout(): void {
    localStorage.removeItem('token');
  }
}