import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { CartService } from "../services/cart/cart.service";
import { Global } from "../shared/global";
import { UserService } from '../services/user/user.service';
import { Router } from "@angular/router";
import { SearchService } from '../services/search/search.service';
declare var jQuery:any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {

  tabs:Array<any> = [
    {title:"Specification",id:1},
    {title:"Reviews",id:2},
    {title:"Description",id:3}
  ]
  selectedTab:any = this.tabs[0];
  constructor(private _productService:ProductsService, private _cartService:CartService,private _userService:UserService,private router:Router,private cdr:ChangeDetectorRef,private _searchService:SearchService) { 
    
  }

  imgShow:number = 3;
  userPath:string = "./assets/products/Mech/users/"
  product:any;
  ngOnInit() {
    try{
      this.product = this._productService.currentProduct;
    }catch(error){
      console.error(error);
    }
  }

  setQuantity(iQuantity:any){
    try{
      this.product.qauntity = iQuantity;
    }catch(error){
      console.error(error);
    }
  }

  ngAfterViewInit(){
    try{
      jQuery(".prd-info .mat-card.mat-card").css("border","0px !important");
    }catch(error){
      console.error(error);
    }
  }

  addToCart(){
    try{
      let user = this._userService.loggedInUser;
      if(user){
        let item = {
          userId:user.userId,
          productId:this.product.productId,
          quantity:this.product.qauntity,
        }
        this._cartService.addToCart(item).subscribe(
          (res)=>{
            if(res.statusCode == 200){
              this._searchService.setloggedUser(user);
              this.router.navigate(["/","mycart"]);
            }
          },
          (error)=>{
            console.error(error);
          }
        );
      }else{
        this.router.navigate(['/','login']);
      }
      
    }catch(error){
      console.error(error);
    }
  }

  ngOnDestroy(){
    try{
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
      }
    }catch(error){
      console.error(error);
    }
  }

}
