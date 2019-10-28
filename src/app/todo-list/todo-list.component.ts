import { Component, OnInit } from '@angular/core';
import { TodoList } from './todo-list.model'
import { TodoListService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  itemList: TodoList;

  // will pull list reference from list service
  constructor(todoService: TodoListService) {
    this.itemList = todoService.getList();
  }

  ngOnInit() {
  }

}
