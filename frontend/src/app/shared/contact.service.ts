import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  contactEmail(body:any) {
    return this.http.post(`${baseUrl}/contact-form`,body);
    
  }

  register(body:any) {
    return this.http.post(`${baseUrl}/registration-form`,body);
    
  }
}
