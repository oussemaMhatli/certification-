import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  api = environment.Api+'file' ;
  constructor(private  http:HttpClient) {

  }

  upload(file : File   ):Observable<any>{
    const formData = new FormData();
    formData.append('file' , file);

    return this.http.post( 'http://localhost:3000/file/upload',formData);
  }




  loadImage(id : string) {
    const api = "http://localhost:3000/file/get/"

    const url = `${api}${id}`
    return this.http.get(url)
  }
}
