import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl="http://localhost:9999/user";

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    const body={
      username,password
    }
    return this.http.post(this.baseUrl+"/login",body)
  }

  register(username:string, password:string) {
    const body={
      username,password
    }

    console.log(this.http.post(this.baseUrl+"/register",body))
    return this.http.post(this.baseUrl+"/register",body)
  }
}
