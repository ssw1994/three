import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Output()
    changeStep = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
