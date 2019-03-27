import { Injectable } from '@angular/core';
// import { Socket } from 'ng6-socket-io';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';
import { Global } from '../global';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {


  getHeaders(){
    try{
      return new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'my-auth-token'
      });
    }catch(error){
      console.error(error);
    }
  }

  /**
   * @author SSW
   * @description this function is used for handle error in http request
   * @param error 
   */
  handleError(error:Error){
    try{
      return throwError(error.message||"Something went wrong");
    }catch(error){
      console.error(error);
    }
  }

  constructor(private http:HttpClient) {
    // this.socket.emit("connect",{data:{user:"sachin"}},()=>{
    //   console.log("user connected")
    // })
  }

  /**
   * @author SSW
   * @description this function is used for sending mails
   * @param param 
   */
  sendMail(param):Observable<any>{
    try{
      return this.http.post(Global.CHAT_URL + "sendMail",param,{headers:this.getHeaders()}).pipe(
        catchError(this.handleError)
      );
    }catch(error){
      console.error(error);
    }
  }



}
