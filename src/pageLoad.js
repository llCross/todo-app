import addTask from "./addTask";
import initializeButtons from "./initializeButtons";
import initializeModal from "./initializeModal";
import showDescription from "./showDescription";
import showTask from "./showTask";
import { myTask } from "./taskClass";
import { Task } from "./taskClass";

export default function pageLoad() {
    const newTask = new Task('Example Task', '2001-03-29', 'This is an example Task', 'high', false);
    myTask.push(newTask);
    initializeButtons();
    initializeModal();
    addTask();
    showTask(myTask);
    showDescription();
}