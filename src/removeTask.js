import { myTask } from "./taskClass";

export default function removeTask(i) {
    myTask.splice(i, 1);

}