import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl = 'your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  sendOtp(mobileNumber: string): Observable<void> {
    const url = `${this.apiUrl}/send-otp`;
    return this.http.post<void>(url, { mobileNumber });
  }

  verifyOtp(mobileNumber: string, otp: string): Observable<void> {
    const url = `${this.apiUrl}/verify-otp`;
    return this.http.post<void>(url, { mobileNumber, otp });
  }
}
