import { Component, OnInit } from '@angular/core';
import { TodoItem, SEVERITY } from './todo-item.model';
import { Input } from '@angular/core';
import { TodoListService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  // I don't like this dependency, fix it once everything works
  constructor(private listService: TodoListService) {

   }

  ngOnInit() {
  }

  private dateToString(): string {
    return this.listService.getDateString(this.item);
  }

  // for button colors
  private isUrgent(): boolean {
    if (this.item.dueDate - SEVERITY.URGENT == 0) return true;
    else return false;
  }

  private isDays(): boolean {
    if (this.item.dueDate - SEVERITY.DAYS == 0) return true;
    else return false;
  }

  private isWeeks(): boolean {
    if (this.item.dueDate - SEVERITY.WEEKS == 0) return true;
    else return false;
  }

  private setUrgent(): void {
    this.item.dueDate = SEVERITY.URGENT;
  }

  private setDays(): void {
    this.item.dueDate = SEVERITY.DAYS;
  }

  private setWeeks(): void {
    this.item.dueDate = SEVERITY.WEEKS;
  }

}
