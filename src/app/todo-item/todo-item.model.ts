export enum SEVERITY {
    URGENT,
    DAYS,
    WEEKS
}

export class TodoItem {
    task: string;
    dueDate: SEVERITY;
    currentIndex: number;

    constructor(obj: any) {
        this.task       = obj && obj.task       ||  'task unknown';
        this.dueDate    = obj && obj.dueDate    ||  SEVERITY.URGENT;
    }
}