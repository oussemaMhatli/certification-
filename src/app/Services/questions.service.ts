import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../models/cat";
import {Question} from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  api=environment.Api+"question"
  constructor(private http:HttpClient) {

  }
  updateCat (id:String , updated : any):Observable<any>{
    return this.http.put<any>(`${this.api}/${id}` , updated);
  }
  createQ ( question : Question):Observable<any>{
    return this.http.post<any>(`${this.api}` , question);
  }
  AllCat ():Observable<any>{
    return this.http.get<any>(`${this.api}` );
  }
  deleteCat (id:String ):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}` );
  }
  count ():Observable<number>{
    return this.http.get<number>(`${this.api}/countQ` );
  }
  getbycat ( cat:string,lev:string):Observable<any>{
    return this.http.get<any>(`${this.api}/findCAt/${cat}/${lev}` );
  }
  getby ( cat:string):Observable<any>{
    return this.http.get<any>(`${this.api}/findcat/${cat}` );
  }
  getOne ( id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/one/${id}` );
  }
}
