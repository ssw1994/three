import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private _cartService:CartService,private _userService:UserService) { 

  }

  cartItems:Array<any> = [];
  ngOnInit() {
    try{
      let user = this._userService.loggedInUser;
      this._cartService.getUserCart(user.userId).subscribe(
        (res)=>{
          console.log(res);
          if(res)
            this.cartItems = res;
        },
        (error)=>{
          console.error(error);
        }
      );
    }catch(error){
      console.error(error);
    }
  }

}
