// Update local storage
const updateLocalStorage = taskList => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
};

// Update display
const updateDisplay = (listItem, listContainer, selectedItem) => {
  listContainer.removeChild(listItem);
  selectedItem = null;
};

// Update both local storage and display
export const updateTaskListAndDisplay = (
  taskList,
  listItem,
  listContainer,
  selectedItem
) => {
  const taskIdToDelete = listItem.index;
  const updatedTaskList = taskList.filter(
    task => task.index !== taskIdToDelete
  );

  updatedTaskList.forEach((task, i) => {
    task.index = i + 1;
  });

  updateLocalStorage(updatedTaskList); // Call the updateLocalStorage function
  updateDisplay(listItem, listContainer, selectedItem); // Call the updateDisplay function
};
