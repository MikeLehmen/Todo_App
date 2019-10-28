import { Component, OnInit } from '@angular/core';
import { TodoItem, SEVERITY } from './todo-item.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {

   }

  ngOnInit() {
  }

}
