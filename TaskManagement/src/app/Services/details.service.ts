import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }
  
  getdetails()
  {
    return this.http.get('http://localhost:3000/signupUsers')
  }
}
