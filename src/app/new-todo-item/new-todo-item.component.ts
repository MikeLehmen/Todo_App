import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-service/todo-service.service';
import { SEVERITY } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {


  constructor(private listService: TodoListService) {

  }

  onSubmit(formObj: any) {
    console.log(formObj);
    this.listService.addNewItem(formObj.task, formObj.due);
  }

  ngOnInit() {
  }

}
