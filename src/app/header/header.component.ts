import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user/user.service";
import { Router } from "@angular/router";
import { SearchService } from "../services/search/search.service";
import { CartService } from "../services/cart/cart.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filePath:string = "./assets/icons/";
  currentUser:any;

  constructor(private userservice:UserService,private searchservice:SearchService,private cartservice:CartService,private router:Router) {
      try{
        this.searchservice.user.subscribe((iUser:any)=>{
          //if(iUser){
            this.currentUser = iUser;
            if(this.currentUser){
              this.getUserCart();
            }
          //}
        });
      }catch(error){  
        console.error(error);
      }
   }

   cartItems:Array<any> = [];
   getUserCart(){
     try{
        this.cartservice.getUserCart(this.currentUser.userId).subscribe((res)=>{
          if(res && res.length>0){
            this.cartItems = res;
          }
        });
     }catch(error){
       console.error(error);
     }
   }

  ngOnInit() {
    try{

    }catch(error){
      console.error(error);
    }
  }

  SignOut(){
    try{
      this.searchservice.setloggedUser(null);
    }catch(error){
      console.error(error);
    }
  }

  gotoMyCart(){
    try{
      this.router.navigate(["/","mycart"]);
    }catch(error){
      console.error(error);
    }
  }

  SignIn(){
    try{
      this.router.navigate(["/","login"]).then((res)=>{
        console.log("Navigated to Login",res);
      },(error)=>{
        console.log(error)
      })
    }catch(error){
      console.error(error);
    }
  }

  updateList(){
    
  }

  showProfile(){
    try{
      
    }catch(error){
      console.error(error);
    }
  }

}
