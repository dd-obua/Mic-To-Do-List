import './styles.css';
import {
  addTask,
  taskInputField,
  form,
  taskAddBtn,
} from './modules/add-task.js';

let storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

const showTaskList = taskList => {
  // Create HTML elements
  const listContainer = document.querySelector('ul');

  taskList.forEach(item => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = item.description;
    const modificationParagraph = document.createElement('p');
    const optionsSpan = document.createElement('span');
    optionsSpan.innerHTML = `<i class="fa fa-ellipsis-v icon" aria-hidden="true"></i>`;
    const deleteSpan = document.createElement('span');
    deleteSpan.innerHTML = `<i class="fa fa-trash icon" aria-hidden="true"></i>`;
    modificationParagraph.appendChild(optionsSpan);
    modificationParagraph.appendChild(deleteSpan);

    // Place child elements inside parent ones
    listItem.appendChild(checkbox);
    listItem.appendChild(taskParagraph);
    listItem.appendChild(modificationParagraph);
    listContainer.appendChild(listItem);

    // Style list components
    deleteSpan.classList.add('hidden');
    modificationParagraph.classList.add('manipulate');
    listItem.classList.add('list-display');
  });
};

showTaskList(storedTaskList);

const populateStorage = () => {
  if (taskInputField.value.length > 0)
    addTask({
      description: taskInputField.value,
      completed: false,
      index: storedTaskList.length + 1,
    });
};

form.addEventListener('submit', populateStorage);

taskAddBtn.addEventListener('click', e => {
  e.preventDefault();
  populateStorage();
  taskInputField.value = '';
  location.reload();
});
