import { Component, OnInit } from '@angular/core';
import { TodoItem, SEVERITY } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  item: TodoItem;

  // will need service as well
  constructor() {
    var itemObj = { task: 'Feed the dog', dueDate: new Date('2019-10-31T12:00:00'), severity: SEVERITY.DAYS };
    this.item = new TodoItem(itemObj);
   }

  ngOnInit() {
  }

}
