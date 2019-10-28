import { TodoItem, SEVERITY } from '../todo-item/todo-item.model';

export class TodoList {
    items: TodoItem[];

    constructor() {
        this.items = [];

        var itemObj = { task: 'Feed the dog', dueDate: new Date('2019-10-28T12:00:00'), severity: SEVERITY.URGENT };
        this.items.push(new TodoItem(itemObj));

        itemObj.task = 'Clean the house'
        itemObj.dueDate = new Date('2019-12-14T06:15:00');
        itemObj.severity = SEVERITY.WEEKS;
        this.items.push(new TodoItem(itemObj));

        itemObj.task = 'Take out the trash'
        itemObj.dueDate = new Date('2019-10-31T19:37:00');
        itemObj.severity = SEVERITY.DAYS;
        this.items.push(new TodoItem(itemObj));
    }
}