import { Injectable } from '@angular/core';
import { Observable,Subject,of, observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Global } from "../shared/global";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  currentProduct:any;
  API_URL = Global.PRODUCT_URL;
  constructor(private http: HttpClient) { 

  }

  handleError(error:any,options:any):any{
    
  }

  getProducts(param:any):Observable<any>{

    let url = "./assets/products/";
    switch(param.type){
      case "MECH":
      //url += "Mech/products.json";
      url = this.API_URL;
      break;
      case "IT":
      url += "IT/products.json";
      break;
      case "GARMENTS":
      url += "Garments/products.json";
      break;
    }
    return this.http.get<any>(url, httpOptions)
      .pipe(
      catchError(this.handleError('getProducts', []))
      );
  }
}
