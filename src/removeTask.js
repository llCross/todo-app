import { myTask } from "./taskClass";

export default function removeTask() {
    for (let i = 0; i < myTask.length; i++) {
    let task = myTask[i];
    const index = myTask.indexOf(task);
    myTask.splice(index, 1);
    }
}