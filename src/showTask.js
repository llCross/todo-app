import showDescription from "./showDescription";
import removeTask from "./removeTask";
import sortTask from "./sortTask";

export default function showTask(tasks) {
    tasks.sort(sortTask);

    let taskContainer = document.querySelector('.task-container');

    taskContainer.innerText = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

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
            removeTask(i);
            showTask(tasks);
            task.completed();
            console.log(tasks);
        });

        let taskTitle = document.createElement('p');
        taskTitle.innerText = `${task.title}`;
        taskTitle.classList.add('title');

        let dateContainer = document.createElement('div');
        dateContainer.classList.add('date-container');

        let taskPriority = document.createElement('div');
        taskPriority.classList.add('task-priority');
        taskPriority.innerText = task.priority.toUpperCase();
        
        if (task.priority === 'high') {
            taskPriority.classList.add('high-priority');
        } else if (task.priority === 'med') {
            taskPriority.classList.add('med-priority');
        } else {
            taskPriority.classList.add('low-priority');
        }

        let taskDate = document.createElement('p');
        taskDate.innerText = `${task.dueDate}`;
        taskDate.classList.add('due-date');

        taskContainer.appendChild(taskContent);
        taskContent.appendChild(titleContainer);
        titleContainer.appendChild(taskCheckbox);
        titleContainer.appendChild(taskTitle);
        taskContent.appendChild(dateContainer);
        dateContainer.appendChild(taskPriority);
        dateContainer.appendChild(taskDate);
    }
}