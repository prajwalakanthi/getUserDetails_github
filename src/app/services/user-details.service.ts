import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  url:string = "https://api.github.com/users?since=135";
  constructor(private http:HttpClient) { }

  getUser(){
     return this.http.get(this.url);
  }
}
