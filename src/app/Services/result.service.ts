import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  api=environment.Api+"result"
  constructor(private http:HttpClient) {

  }
  creatR(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  getAll():Observable<any>{
    return this.http.get<any>(this.api)
  }
  get(id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/oneuser/${id}`)
  }
  getone(id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/one/${id}`)
  }
  getCat(cat:string):Observable<any>{
    return this.http.get<any>(`${this.api}/getByCat/${cat}`)
  }
}
