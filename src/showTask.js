import { myTask } from "./taskClass";
import showDescription from "./showDescription";

export default function showTask() {

    let taskContainer = document.querySelector('.task-container');

    taskContainer.innerText = '';

    for (let i = 0; i < myTask.length; i++) {
        let task = myTask[i];

        let taskContent = document.createElement('div');
        taskContent.classList.add('task');
        
        let titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        titleContainer.addEventListener('click', () => {
            showDescription(i);
        })

        let taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");
        taskCheckbox.addEventListener('click', () => {
            myTask[i].completed();
        });

        let taskTitle = document.createElement('p');
        taskTitle.innerText = `${task.title}`;
        taskTitle.classList.add('title');

        let taskDate = document.createElement('p');
        taskDate.innerText = `${task.dueDate}`;
        taskDate.classList.add('due-date');

        taskContainer.appendChild(taskContent);
        taskContent.appendChild(titleContainer);
        titleContainer.appendChild(taskCheckbox);
        titleContainer.appendChild(taskTitle);
        taskContent.appendChild(taskDate);
    }
}