import { myTask } from "./taskClass";
import filterToday from "./filterToday";
import showTask from "./showTask";

export default function initializeButtons() {
    const allTab = document.querySelector('#all-button');
    const todayTab = document.querySelector('#today-button');
    const weekTab = document.querySelector('#week-button');
    const calendarTab = document.querySelector('#calendar-button');
    const inboxTab = document.querySelector('#inbox-button');

    allTab.addEventListener('click', () => {
        showTask(myTask);
    });

    todayTab.addEventListener('click', () => {
        const taskForToday = myTask.filter(filterToday);
        console.log('filterToday:', taskForToday);
        console.log(myTask);
        showTask(taskForToday);
    });

    weekTab.addEventListener('click', () => {

    });

    calendarTab.addEventListener('click', () => {

    });

    inboxTab.addEventListener('click', () => {

    });
}