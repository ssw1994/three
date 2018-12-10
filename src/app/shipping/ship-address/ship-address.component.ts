import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ship-address',
  templateUrl: './ship-address.component.html',
  styleUrls: ['./ship-address.component.css']
})
export class ShipAddressComponent implements OnInit {
  @Output()
    changeStep = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
