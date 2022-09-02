import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
api=environment.Api
  constructor(private http:HttpClient) {

  }
  login(data:any){
    return this.http.post(`${this.api}user/login`, data);

  }

}
