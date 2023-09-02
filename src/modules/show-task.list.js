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
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa', 'fa-trash', 'icon');
    optionsSpan.appendChild(optionsIcon);
    const deleteSpan = document.createElement('span');
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

    listItem.addEventListener('click', () => {
      optionsSpan.classList.add('hidden');
      deleteSpan.classList.remove('hidden');
    });
  });
};
