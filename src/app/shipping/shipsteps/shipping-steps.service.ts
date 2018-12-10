import { Injectable } from '@angular/core';
import { step } from "../step";
import { CartComponent } from "../cart/cart.component";
import { PaymentComponent } from "../payment/payment.component";
import { ShipAddressComponent } from "../ship-address/ship-address.component";
@Injectable({
  providedIn: 'root'
})
export class ShippingStepsService {

  constructor() { }

  getStep(){
    try{
      return [
        new step(CartComponent,0,"Shopping Cart",false),
        new step(ShipAddressComponent,1,"Shipping",false),
        new step(PaymentComponent,2,"Payment",false),
      ]
    }catch(error){
      console.error(error);
    }
  }
}
