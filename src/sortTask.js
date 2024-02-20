const { compareAsc } = require("date-fns");

export default function sortTask(a, b) {
    return compareAsc(new Date(a.dueDate), new Date(b.dueDate));
}