import { Component, OnInit } from '@angular/core';
import { ChatService } from "../service/chat.service";
@Component({
  selector: 'app-socket-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatservice: ChatService) {

  }

  ngOnInit() {
  }

}
