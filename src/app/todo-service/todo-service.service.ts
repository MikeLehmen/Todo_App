import { Injectable } from '@angular/core';
import { TodoList } from '../todo-list/todo-list.model';
import { TodoItem, SEVERITY } from '../todo-item/todo-item.model';

@Injectable()
export class TodoListService {
    private list: TodoList;

    constructor() {
        // pre-populate with some stub items
        this.list = new TodoList();

        var itemObj = { task: 'Feed the dog', dueDate: new Date('2019-10-28T12:00:00'), severity: SEVERITY.URGENT };
        this.list.pushItem(new TodoItem(itemObj));

        itemObj.task = 'Clean the house'
        itemObj.dueDate = new Date('2019-12-14T06:15:00');
        itemObj.severity = SEVERITY.WEEKS;
        this.list.pushItem(new TodoItem(itemObj));

        itemObj.task = 'Take out the trash'
        itemObj.dueDate = new Date('2019-10-31T19:37:00');
        itemObj.severity = SEVERITY.DAYS;
        this.list.pushItem(new TodoItem(itemObj));
    }

    getList(): TodoList {
        return this.list;
    }
}