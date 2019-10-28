import { TodoItem, SEVERITY } from '../todo-item/todo-item.model';

export class TodoList {
    items: TodoItem[];

    constructor() {
        this.items = [];
    }

    pushItem(item: TodoItem): void {
        this.items.push(item);
    }
}