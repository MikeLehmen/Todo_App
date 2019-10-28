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
    }

    getList(): TodoList {
        return this.list;
    }

    getDateString(item: TodoItem) {
        return this.dateStrings[item.dueDate];
    }
}