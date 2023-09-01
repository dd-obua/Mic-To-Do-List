import './styles.css';

const list = [
  { description: 'Pray', completed: true, index: 0 },
  { description: 'Brush', completed: true, index: 1 },
  { description: 'Walk', completed: false, index: 2 },
  { description: 'Sing', completed: false, index: 3 },
  { description: 'Treck', completed: false, index: 4 },
];

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

showTaskList(list);
