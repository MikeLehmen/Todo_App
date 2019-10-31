import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-service/todo-service.service';
import { SEVERITY } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css', '../app.component.css']
})
export class NewTodoItemComponent implements OnInit {
  // for default select prototyping
  times: SEVERITY[];
  strings: string[];
  
  constructor(private listService: TodoListService) {
    this.times = [SEVERITY.URGENT,SEVERITY.DAYS,SEVERITY.WEEKS];
    this.strings = ["URGENT", "DAYS", "WEEKS"];
  }

  onSubmit(formObj: any) {
    this.listService.addNewItem(formObj.task, formObj.due);
  }

  ngOnInit() {
  }

}
