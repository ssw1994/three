import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { Routes,RouterModule } from "@angular/router";
import { AddtodoComponent } from './components/addtodo/addtodo.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:TodoListComponent,
  },
  {
    path:"addtodo",
    component:AddtodoComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    [RouterModule.forChild(routes)]
  ],
  declarations: [
    TodoListComponent,
    AddtodoComponent
  ],
  exports: [RouterModule]
})
export class TodoModule { 
}
