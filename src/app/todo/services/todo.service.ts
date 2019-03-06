import { Injectable } from '@angular/core';
import { Observable,Subject,of, observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Global } from "../../shared/global";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = Global.TODO_URL;
  constructor(private http:HttpClient) {

  }

  getHeaders(){
    try{
      return new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }catch(error){
      console.error(error);
    }
  }

  handleError(error:Error){
    try{
      return throwError(error);
    }catch(error){
      console.error(error);
    }
  }

  getList():Observable<any>{
    try{
      return this.http.get(this.API_URL +"list",{headers:this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }catch(error){
      console.error(error);
    }
  }
}
