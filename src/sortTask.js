export default function sortTask(a, b) {
    if (a.dueDate > b.dueDate) {
        return 1;
    } else if (a.dueDate < b.dueDate) {
        return -1;
    } else {
        return 0;
    }
}