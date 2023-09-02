import './styles.css';
import { showTaskList } from './modules/show-task.list.js';
import {
  addTask,
  taskInputField,
  form,
  taskAddBtn,
} from './modules/add-task.js';

let storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

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
