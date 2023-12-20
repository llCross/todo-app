import { myTask } from "./taskClass";

export default function showDescription(index) {
    let descriptionPanel = document.querySelector('.description-panel');

    descriptionPanel.innerHTML = '';

    let descriptionTitle = document.createElement('p');

    let descriptionBody = document.createElement('p');
    descriptionBody.classList.add('description-body');
    let noDescription = document.createElement('p');
    noDescription.classList.add('no-description');

    if (myTask.length > index && myTask[index].description !== '') {
        descriptionTitle.innerText = 'Description:';
        descriptionBody.innerText = myTask[index].description;
        descriptionPanel.appendChild(descriptionTitle);
        descriptionPanel.appendChild(descriptionBody);
        return;
    }   else {
        noDescription.innerText = 'Descriptions will show here!';
        descriptionPanel.appendChild(noDescription);
    }
}