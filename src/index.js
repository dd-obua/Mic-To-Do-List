import './styles.css';

const list = [
  { description: 'Pray', completed: true, index: 0 },
  { description: 'Brush', completed: true, index: 1 },
  { description: 'Bathe', completed: true, index: 2 },
  { description: 'Walk', completed: false, index: 3 },
  { description: 'Sing', completed: false, index: 4 },
  { description: 'Treck', completed: false, index: 5 },
  { description: 'Work', completed: false, index: 6 },
];

const listContainer = document.querySelector('ul');

const showTaskList = () => {
  list.forEach(item => {
    const listItemHTML = `
      <li>
        <input type="checkbox">
        <p class="task">${item.description}</p>
        <p class="manipulate">
          <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
          <span class="delete hidden"><i class="fa fa-trash" aria-hidden="true"></i></span>
        </p>
      </li>
    `;
    listContainer.insertAdjacentHTML('beforeend', listItemHTML);
  });
};
