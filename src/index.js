import './styles.css';
import {
  addTask,
  taskInputField,
  form,
  taskAddBtn,
} from './modules/add-task.js';

let storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

const showTaskList = list => {
  const listContainer = document.querySelector('ul');

  list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <p class="task">${item.description}</p>
      <p class="manipulate">
        <span class="options"><i class="fa fa-ellipsis-v icon" aria-hidden="true"></i></span>
        <span class="delete hidden"><i class="fa fa-trash icon" aria-hidden="true"></i></span>
      </p>
    `;
    listContainer.appendChild(listItem);
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
