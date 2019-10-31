import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoItem, SEVERITY } from './todo-item.model';
import { Input } from '@angular/core';
import { TodoListService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css', '../app.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() item: TodoItem;
  @Input() index: number;

  constructor(private listService: TodoListService) {
    
  }

  // use lifecycle hooks to grab and update index from ngFor, makes things easy
  ngOnInit() {
    this.item.currentIndex = this.index;
  }

  ngOnChanges() {
    this.item.currentIndex = this.index;
  }

  private dateToString(): string {
    return this.listService.getDateString(this.item);
  }

  // remove button event
  remove() {
    this.listService.removeItem(this.index);
  }

  // for button colors
  private isUrgent(): boolean {
    if (this.item.dueDate == SEVERITY.URGENT) return true;
    else return false;
  }

  private isDays(): boolean {
    if (this.item.dueDate == SEVERITY.DAYS) return true;
    else return false;
  }

  private isWeeks(): boolean {
    if (this.item.dueDate == SEVERITY.WEEKS) return true;
    else return false;
  }

  // update dueDues
  private setUrgent(): void {
    this.listService.setUrgent(this.item);
  }

  private setDays(): void {
    this.listService.setDays(this.item);
  }

  private setWeeks(): void {
    this.listService.setWeeks(this.item);
  }

}
