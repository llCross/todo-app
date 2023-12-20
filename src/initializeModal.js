export default function initializeModal() {
    
    const taskModal = document.querySelector('.task-modal');
    const openModal = document.querySelector('#add-task-button');
    const closeModal = document.querySelector('.cancel-button');

    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        taskModal.showModal();
    });

    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        taskModal.close();
    });
}