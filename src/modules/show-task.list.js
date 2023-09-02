let selectedItem = null;

// Create HTML element
const createElement = (tag, classes) => {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
};

// Create list item
const createListItem = item => {
  const listItem = createElement('li', ['list-display']);

  const checkbox = createElement('input', []);
  checkbox.type = 'checkbox';

  const taskParagraph = createElement('p', []);
  taskParagraph.textContent = item.description;

  const modificationParagraph = createElement('p', ['manipulate']);

  const optionsSpan = createElement('span', ['options-span']);
  const optionsIcon = createElement('i', ['fa', 'fa-ellipsis-v', 'icon']);

  const deleteSpan = createElement('span', ['delete-span', 'hidden']);
  const deleteIcon = createElement('i', ['fa', 'fa-trash', 'icon']);

  optionsSpan.appendChild(optionsIcon);
  deleteSpan.appendChild(deleteIcon);

  modificationParagraph.appendChild(optionsSpan);
  modificationParagraph.appendChild(deleteSpan);

  listItem.appendChild(checkbox);
  listItem.appendChild(taskParagraph);
  listItem.appendChild(modificationParagraph);

  return listItem;
};

// Update local storage and display
const updateTaskListAndDisplay = (taskList, listItem, listContainer) => {
  const taskIdToDelete = listItem.index;
  const updatedTaskList = taskList.filter(
    task => task.index !== taskIdToDelete
  );

  updatedTaskList.forEach((task, i) => {
    task.index = i + 1;
  });

  localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  listContainer.removeChild(listItem);
  selectedItem = null;
};

export const showTaskList = taskList => {
  const listContainer = document.querySelector('ul');

  taskList.forEach(item => {
    const listItem = createListItem(item);
    listItem.index = item.index;

    listItem.addEventListener('click', () => {
      if (selectedItem) {
        const [optionsSpan, deleteSpan] = selectedItem.querySelectorAll(
          '.options-span,.delete-span'
        );
        optionsSpan.classList.remove('hidden');
        deleteSpan.classList.add('hidden');
      }

      const [optionsSpan, deleteSpan] = listItem.querySelectorAll(
        '.options-span,.delete-span'
      );
      optionsSpan.classList.add('hidden');
      deleteSpan.classList.remove('hidden');
      selectedItem = listItem;
    });

    listItem.querySelector('.delete-span').addEventListener('click', () => {
      updateTaskListAndDisplay(taskList, listItem, listContainer);
    });

    listContainer.appendChild(listItem);
  });
};
