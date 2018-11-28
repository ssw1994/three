import { Injectable } from '@angular/core';
import { Observable,Subject,of, observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Global } from '../../shared/global';
import { ActivatedRoute } from '@angular/router';
import { RequestOptions } from '@angular/http';

/*var headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
});
headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

const httpOptions = new RequestOptions({ headers:headers});*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL:string = Global.USER_URL;
  loggedInUser:any;
  constructor(private http: HttpClient) { 
    //this.userApiUrl = Global.USER_URL;
  }

  handleError(error:any,options:any):any{
    
  }

  /**
   * @author SSW
   * @param param
   * @description this function is used for registering new user
   */
  signup(param: any): Observable<any> {
    let url = this.API_URL + "/register";
    return this.http.put(url, param, httpOptions)
      .pipe(
      catchError(this.handleError)
      );
  }

  login(param:any):Observable<any>{
    let url = this.API_URL + "/login";
    return this.http.post(url,param,httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
}
