const addTask = task => {
  // Check if data already exists in local storage
  let storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

  // Ensure existing data is an array
  if (!Array.isArray(storedTaskList)) storedTaskList = [];

  // Add task to task list
  storedTaskList.push(task);

  // Update local storage
  localStorage.setItem('taskList', JSON.stringify(storedTaskList));
};

const taskInputField = document.getElementById('add-task-field');
const taskAddBtn = document.getElementById('add-task-btn');
const form = document.getElementById('form');

export { addTask, taskInputField, form, taskAddBtn };
