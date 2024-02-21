const { isEqual } = require("date-fns");

export default function filterToday(task) {
    const today = new Date();
    const taskDate = new Date(task.dueDate);
    
    today.setHours(0, 0, 0, 0);
    taskDate.setHours(0, 0, 0, 0);

    return isEqual(taskDate, today);
}