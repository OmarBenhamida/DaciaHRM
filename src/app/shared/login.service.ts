import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8000/api/login';

  constructor(private http: HttpClient) { }



 login(model) {
    return this.http.post(this.url, model);
  }

}
