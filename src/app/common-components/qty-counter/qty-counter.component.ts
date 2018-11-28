import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qty-counter',
  templateUrl: './qty-counter.component.html',
  styleUrls: ['./qty-counter.component.css']
})
export class QtyCounterComponent implements OnInit {

  @Input()
  quantity:number;
  
  @Output()
  getQuantity = new EventEmitter<any>();

  constructor() { 

  }

  inc(){
    try{
      this.quantity +=1;
      if(this.getQuantity)
        this.getQuantity.emit(this.quantity);
    }catch(error){
      console.error(error);
    }
  }

  dec(){
    try{
      this.quantity -= 1;
      if(this.getQuantity)
        this.getQuantity.emit(this.quantity);
    }catch(error){
      console.error(error);
    }
  }

  ngOnInit() {
  }

}
