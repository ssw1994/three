import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject }from "rxjs";
import { UserService } from "../../services/user/user.service";
import { localDB } from "../../general/lsdb";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  
  constructor(private userService:UserService) {

  }
  search:any =  new Subject<any>();
  searchSouce =  this.search.asObservable();

  searchAck:any = new Subject<any>();
  searchAckSouce:any = this.searchAck.asObservable();

  page:any = new Subject<any>();
  pageSource = this.page.asObservable();

  user:any = new Subject<any>();
  userSource = this.user.asObservable();

  completeSearch(iArr:Array<any>){
    this.searchAck.next(iArr);
  }

  registerSearch(data:any){
    this.search.next(data);
  }

  setPageClick(IPage:any){
    this.page.next(IPage);
  }

  setloggedUser(IUser:any){
    this.userService.loggedInUser = IUser;
    localDB.setDatabyKey("loggedUser",IUser);
    this.user.next(IUser);
  }

}
