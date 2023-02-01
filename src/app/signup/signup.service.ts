import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  addusers(data: any) {
    return this.http.post(`${this.url}`, data);
  }
  getusers() {
    return this.http.get(`${this.url}`);
  }
}
