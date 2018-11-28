import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showerror',
  templateUrl: './showerror.component.html',
  styleUrls: ['./showerror.component.css']
})
export class ShowerrorComponent implements OnInit {

  @Input()
    msg:string;
  constructor() { }

  ngOnInit() {
  }

}
