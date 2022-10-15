import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  signUp(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(this.url, data, httpOptions );
  }

}
