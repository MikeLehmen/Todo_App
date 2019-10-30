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

        var itemObj = { task: 'Feed the dog', dueDate: SEVERITY.URGENT };
        this.list.pushItem(new TodoItem(itemObj));

        itemObj.task = 'Clean the house'
        itemObj.dueDate = SEVERITY.WEEKS;
        this.list.pushItem(new TodoItem(itemObj));

        itemObj.task = 'Take out the trash'
        itemObj.dueDate = SEVERITY.DAYS;
        this.list.pushItem(new TodoItem(itemObj));

        this.dateStrings = [ "URGENT", "DAYS", "WEEKS" ];

        // test new item method, should switch above item creation to use this
        this.addNewItem("Sort out life", SEVERITY.URGENT);
    }

    removeItem(index: number) : void {
        this.list.items.splice(index, 1);
    }

    // add new TodoItem
    addNewItem(_task: string, _due: SEVERITY): void {
        var newItem = new TodoItem( {task : _task, dueDate : _due } );
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
    // for a while so this was my go to before I even thought to look at JS enum methods...)
    getDateString(item: TodoItem) {
        return this.dateStrings[item.dueDate];
    }
}