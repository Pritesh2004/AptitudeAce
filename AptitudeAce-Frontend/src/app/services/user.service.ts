import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  constructor(private http: HttpClient) { }


  
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }


  sendOTP(email: string, otp: string): Observable<any> {
    const body = { email, otp };
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${this.baseUrl}/user/verify-otp`, body, { responseType: 'text', headers, observe: 'response' })
      .pipe(map(response => response.body)); // Assuming the response body contains the OTP verification status
  }

}
