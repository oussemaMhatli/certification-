import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../models/cat";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  api=environment.Api+"categorie"
  constructor(private http:HttpClient) {

  }
  updateCat (id:String , updated : any):Observable<Cat>{
    return this.http.put<Cat>(`${this.api}/${id}` , updated);
  }
  createCat ( cat : Cat):Observable<Cat>{
    return this.http.post<Cat>(`${this.api}` , cat);
  }
  AllCat ():Observable<Cat>{
    return this.http.get<Cat>(`${this.api}` );
  }
  deleteCat (id:String ):Observable<Cat>{
    return this.http.delete<Cat>(`${this.api}/${id}` );
  }
  findOne (id:String ):Observable<Cat>{
    return this.http.get<Cat>(`${this.api}/one/${id}` );
  }
count():Observable<number>{
    return this.http.get<number>(`${this.api}/countC`)
}
}
