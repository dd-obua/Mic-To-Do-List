import { createElement, createListItem } from './create-elements.js';
import { updateTaskListAndDisplay } from './update-task-list.js';

let selectedItem = null;

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
