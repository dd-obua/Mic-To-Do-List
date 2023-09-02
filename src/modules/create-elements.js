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

export { createElement, createListItem };
