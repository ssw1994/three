import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output()
    changeStep = new EventEmitter<any>();

  cartItems:Array<any> = [];
  filePath:string = "./assets/data/"
  constructor() { 
    try{
      this.cartItems = this.getCartProducts();
    }catch(error){
      console.error(error);
    }
  }

  ngOnInit() {
  }

  getTotal(item:any):any{
    try{
        let total:any = parseFloat((parseInt(item.quantity) * parseInt(item.price)).toString()).toFixed(2);
        item['total'] = total;
        return total;
    }catch(error){
      console.error(error);
    }
  }

  setQuantity(iquantity:any,item:any){
    try{
      item['quantity'] = iquantity;
    }catch(error){
      console.error(error)
    }
  }

  checkout(){
    try{
      this.changeStep.emit(1);
    }catch(error){
      console.error(error);
    }
  }

  removeItem(item,index){
    try{
      this.cartItems.splice(index,1);
    }catch(error){
      console.error(error);
    }
  }

  getCartTotal():any{
    try{
      let tot:number = 0;
      this.cartItems.forEach((x)=>{
        tot += parseFloat(this.getTotal(x));
      });
      return tot.toFixed(2);
    }catch(error){
      console.error(error);
    }
  }

  getCartProducts(){
    try{
      return [
        {
          img:"watch1.jpeg",
          details:"abc",
          price:10,
          quantity:2,
          total:""
        },
        {
          img:"watch4.jpeg",
          details:"pqr",
          price:20,
          quantity:3,
          total:""
        }

      ]
    }catch(error){
      console.error(error);
    }
  }

}
