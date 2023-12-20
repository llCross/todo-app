const myTask = [];

class Task {
    
    constructor(_title, _dueDate, _description, _priority, _completed) {
        this.title = _title;
        this.dueDate = _dueDate;
        this.description = _description;
        this.priority = _priority;
        this.complete = false;
    }

    completed(event) {
        this.complete = !this.complete;
        console.log('complete!')
    }
}

export { myTask };
export { Task };