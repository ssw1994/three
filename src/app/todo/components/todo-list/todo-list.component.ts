import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { ITodo } from "../../models";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList:Array<ITodo> = [];
  constructor(private todoservice:TodoService) { }

  getList(){
    try{
      this.todoservice.getList().subscribe(
        (res)=>{
          if(res)
            this.todoList = res;
        },
        (error)=>{
          console.error(error);
        }
      )
    }catch(error){
      console.error(error)
    }
  }
  
  ngOnInit() {
    try{
    this.getList();    
    }catch(error){
      console.error(error);
    }
  }

}
