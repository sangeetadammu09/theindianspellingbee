import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUri: string = '/api';
 // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  contactEmail(body:any) {
    return this.http.post(`${this.baseUri}/contact-form`,body);
    
  }

  register(body:any) {
    return this.http.post(`${this.baseUri}/registration-form`,body);
    
  }
}
