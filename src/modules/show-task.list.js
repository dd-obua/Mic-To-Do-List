let selectedItem = null;

export const showTaskList = taskList => {
  const listContainer = document.querySelector('ul');

  taskList.forEach(item => {
    // Create HTML elements
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = item.description;
    const modificationParagraph = document.createElement('p');
    const optionsIcon = document.createElement('i');
    optionsIcon.classList.add('fa', 'fa-ellipsis-v', 'icon');
    const optionsSpan = document.createElement('span');
    optionsSpan.classList.add('options-span');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa', 'fa-trash', 'icon');
    optionsSpan.appendChild(optionsIcon);
    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete-span');
    deleteSpan.appendChild(deleteIcon);

    modificationParagraph.appendChild(optionsSpan);
    modificationParagraph.appendChild(deleteSpan);

    // Place child elements inside parent ones
    listItem.appendChild(checkbox);
    listItem.appendChild(taskParagraph);
    listItem.appendChild(modificationParagraph);
    listContainer.appendChild(listItem);

    // Style list components
    listItem.classList.add('list-display');
    modificationParagraph.classList.add('manipulate');
    deleteSpan.classList.add('hidden');

    // Manipulate tasks
    listItem.addEventListener('click', () => {
      // Check if another item was selected and toggle its visibility
      if (selectedItem) {
        const optionsSpan = selectedItem.querySelector('.options-span');
        const deleteSpan = selectedItem.querySelector('.delete-span');
        if (optionsSpan && deleteSpan) {
          optionsSpan.classList.remove('hidden');
          deleteSpan.classList.add('hidden');
        }
      }

      // Remove options span and display delete span if a list item is clicked
      const optionsSpan = listItem.querySelector('.options-span');
      const deleteSpan = listItem.querySelector('.delete-span');

      if (optionsSpan && deleteSpan) {
        optionsSpan.classList.add('hidden');
        deleteSpan.classList.remove('hidden');
      }

      // Update currently selected item
      selectedItem = listItem;
    });
  });
};
