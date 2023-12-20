import { Task } from "./taskClass";
import { myTask } from "./taskClass";
import showTask from "./showTask";
import isValidForm from "./isValidForm";

export default function addTask() {
    const submitButton = document.querySelector('.submit-button');
    const taskModal = document.querySelector('.task-modal');
    const taskForm = document.getElementById('task-form');

    submitButton.addEventListener('click', (event) => {
        if (!isValidForm(taskForm)) {
            return;
        };
        event.preventDefault();

        const title = document.querySelector('#title').value;
        const dueDate = document.querySelector('#dueDate').value;
        const description = document.querySelector('#description').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const complete = false;
        let newTask = new Task(title, dueDate, description, priority, complete)
        myTask.push(newTask);
        showTask();
        taskModal.close();

        document.querySelector('#title').value = '';
        document.querySelector('#dueDate').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('input[name="priority"]:checked').checked = false;
        console.log(myTask);
        console.log('done!');
    });
}