const PubSub = require('../helpers/pub_sub.js');

const TodoListView = function(container) {
  this.container = container;
};

TodoListView.prototype.bindEvents = function () {
  PubSub.subscribe('Todo:data-loaded', (event) => {
    this.render(event.detail);
  })
};

TodoListView.prototype.render = function (data) {
  this.container.innerHTML = " ";
  data.forEach((todoItem) => {
    const title = todoItem.title;
    const newElement = document.createElement('p');
    newElement.textContent = title;
    this.container.appendChild(newElement);

    const deleteButton = this.createDeleteButton(todoItem._id);
    deleteButton.addEventListener('click', (event) =>{
      const todoItemId = event.target.value;
      PubSub.publish('TodoListView:delete-clicked', todoItemId);
    });

    this.container.appendChild(deleteButton);




  });
};

TodoListView.prototype.createDeleteButton = function (todoItemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = todoItemId;

  button.addEventListener('click', (event) => {
    PubSub.publish('TodoListView:item-delete-clicked', event.target.value);
    console.log(button);
  });
  return button;
};

module.exports = TodoListView;
