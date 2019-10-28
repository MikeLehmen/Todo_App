export enum SEVERITY {
    URGENT,
    DAYS,
    WEEKS
}

export class TodoItem {
    task: string;
    dueDate: Date;
    severity: SEVERITY;

    constructor(obj: any) {
        this.task       = obj && obj.task       ||  'task unknown';
        this.dueDate    = obj && obj.dueDate    ||  new Date();
        this.severity   = obj && obj.severity   ||  SEVERITY.URGENT;
    }
}