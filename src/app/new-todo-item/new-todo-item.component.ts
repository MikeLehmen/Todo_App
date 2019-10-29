import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  

  constructor(private listService: TodoListService) {

  }

  ngOnInit() {
  }

}
