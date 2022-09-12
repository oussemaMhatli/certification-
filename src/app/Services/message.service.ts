import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  api=environment.Api+"message"
  constructor(private http:HttpClient) {
  }
  sendmessage(data:any):Observable<any>{
    return this.http.post<any>(`${this.api}`,data)
  }
  verif(idU:string):Observable<any>{
    return this.http.get(`${this.api}/ver/${idU}`)
  }
  pushmsg(id:string,msg:string,ids:string){
    return this.http.put(`${this.api}/${id}/${msg}/${ids}`,{})
  }
  userMSG(idU:string):Observable<any>{
    return this.http.get<any>(`${this.api}/Umsg/${idU}`)
  }
  countmsgforhome(idU:string):Observable<any>{
    return this.http.get<any>(`${this.api}/countmsg/${idU}`)
  }
  countmsgforUser(idU:string):Observable<any>{
    return this.http.get<any>(`${this.api}/msgCU/${idU}`)
  }
  uodatemsgforuser(id:string):Observable<any>{
    return this.http.put<any>(`${this.api}/upduser/${id}`,{})
  }
  uodatemsgforhome():Observable<any>{
    return this.http.put<any>(`${this.api}/upd`,{})
  }
  countfora(id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/f/${id}`)
  }
  ca(id:string):Observable<any>{
    return this.http.put<any>(`${this.api}/u/${id}`,{})
  }
}
