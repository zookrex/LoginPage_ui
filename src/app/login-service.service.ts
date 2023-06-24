import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface User{
    msg:string
  
}

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  private baseUrl="http://localhost:9999/user";

  constructor(private http: HttpClient) { }
  

  login(username:string, password:string) :  Observable <User> {
    const body={
      username,password
    }

    return this.http.post<User>(this.baseUrl+"/login",body
    ).pipe(
      map((response: User) => response)
    );
  }

  register(username:string, password:string) :  Observable <User>{
    const body={
      username,password
    }
     return this.http.post<User>(this.baseUrl+"/register",body)
     .pipe(
          map((response: User) => response)
        );
  }
}
