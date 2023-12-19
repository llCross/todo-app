export default function initializeModal() {
    
    const taskModal = document.querySelector('.task-modal');
    const openModal = document.querySelector('#add-task-button');
    const closeModal = document.querySelector('.cancel-button');

    openModal.addEventListener('click', () => {
        taskModal.showModal();
    });

    closeModal.addEventListener('click', () => {
        taskModal.close();
    });
}