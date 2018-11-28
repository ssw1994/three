import { Injectable } from '@angular/core';
import { Observable,Subject,of, observable } from 'rxjs';
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
export class CartService {

  API_URL = Global.CART_URL;
  constructor(private http: HttpClient) { 

  }

  handleError(error:any,options:any):any{
    
  }

  addToCart(item):Observable<any>{
    try{
      return this.http.post(Global.CART_URL + "/add",item,httpOptions)
      .pipe(
        catchError(this.handleError('getUserCart', []))
      );
    }catch(error){
      console.error(error);
    }
  }

  getUserCart(userId:any):Observable<any>{
    try{
      return this.http.get(Global.CART_URL + "/"+userId)
      .pipe(
        catchError(this.handleError('getUserCart', []))
      );
    }catch(error){
      console.error(error);
    }
  }

  removeCartItem(cartId:any):Observable<any>{
    try{
      let url = Global.CART_URL + "/remove/"+cartId;
      return this.http.get(url,httpOptions)
      .pipe(
        catchError(this.handleError('removeCartItem', []))
      )
    }catch(error){
      console.error(error);
    }
  }
}
