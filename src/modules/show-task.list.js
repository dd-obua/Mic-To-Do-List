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
    listItem.classList.add('list-display');
    modificationParagraph.classList.add('manipulate');
    deleteSpan.classList.add('hidden');
  });
};