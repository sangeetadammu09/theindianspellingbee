import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //baseUri: string = 'http://localhost:8080/api';
    baseUri: string = '/api';
 
  constructor(private http:HttpClient) { }

  contactEmail(body:any) {
    return this.http.post(`${this.baseUri}/contact-form`,body);
    
  }

  register(body:any) {
    return this.http.post(`${this.baseUri}/registration-form`,body);
    
  }
}
