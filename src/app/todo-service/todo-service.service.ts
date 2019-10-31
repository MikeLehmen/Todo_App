import { Injectable } from '@angular/core';
import { TodoList } from '../todo-list/todo-list.model';
import { TodoItem, SEVERITY } from '../todo-item/todo-item.model';

@Injectable()
export class TodoListService {
    private list: TodoList;
    private dateStrings : string[];

    constructor() {
        // pre-populate with some stub items
        this.list = new TodoList();
        
        this.addNewItem("Feed the dog", SEVERITY.URGENT);
        this.addNewItem("Clean the house", SEVERITY.WEEKS);
        this.addNewItem("Take out the trash", SEVERITY.DAYS);
        this.addNewItem("Sort out life", SEVERITY.WEEKS);
        
        this.dateStrings = [ "Urgent", "Days", "Weeks" ];
    }

    removeItem(index: number) : void {
        this.list.items.splice(index, 1);
    }

    // add new TodoItem
    addNewItem(newTask: string, newDue: SEVERITY): void {
        var newItem = new TodoItem( {task : newTask, dueDate : newDue } );
        this.list.pushItem(newItem);
    }

    // update due date properties
    setUrgent(item: TodoItem): void {
        item.dueDate = SEVERITY.URGENT;
    }
    
    setDays(item: TodoItem): void {
        item.dueDate = SEVERITY.DAYS;
    }
    
    setWeeks(item: TodoItem): void {
        item.dueDate = SEVERITY.WEEKS;
    }

    // accessor
    getList(): TodoList {
        return this.list;
    }

    // return enum string (I guess there's a toString method, but I've been in c++ land 
    // for a while so this was where my head went before I thought to look at JS enum methods...)
    getDateString(item: TodoItem) {
        return this.dateStrings[item.dueDate];
    }
}