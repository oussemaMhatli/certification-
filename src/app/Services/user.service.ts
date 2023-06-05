import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Cat} from "../models/cat";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
api=environment.Api+'user'
  constructor(private http:HttpClient) { }
  updateuser (id:String , updated : any):Observable<User>{
    return this.http.put<User>(`${this.api}/${id}` , updated);
  }

  AllUser ():Observable<User>{
    return this.http.get<User>(`${this.api}` );
  }
  deleteUser (id:String ):Observable<User>{
    return this.http.delete<User>(`${this.api}/${id}` );
  }
  getOneUser (id:String ):Observable<User>{
    return this.http.get<User>(`${this.api}/one/${id}` );
  }
  count ( ):Observable<number>{
    return this.http.get<number>(`${this.api}/countU` );
  }
  countwh ( ):Observable<number>{
    return this.http.get<number>(`${this.api}/countWh` );
  }
  registre(user:User):Observable<User>{
  return this.http.post<User>(`${this.api}`,user)
  }
  sendemail(email:any):Observable<any>{
  return this.http.post<any>(`${this.api}/mail`,email)
  }
  upValidation(id:string):Observable<any>{
  return this.http.patch<any>(`${this.api}/${id}`,{})
  }
  upCode(id:string,code:string):Observable<any>{
    return this.http.patch<any>(`${this.api}/${id}/${code}`,{})
  }
  upExCode(id:string,code:string):Observable<any>{
    return this.http.patch<any>(`${this.api}/exam/${id}/${code}`,{})
  }
  upPassed(id:string):Observable<any>{
    return this.http.patch<any>(`${this.api}/passed/${id}`,{})
  }
  UpdateUser(id: string, data: User):Observable<any>{
    return this.http.put<any>(`${this.api}/up/${id}`,data)
  }


}
