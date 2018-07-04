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
  data.forEach((todoItem) => {
    const title = todoItem.title;
    const newElement = document.createElement('p');
    newElement.textContent = title;
    this.container.appendChild(newElement);
  });
};

module.exports = TodoListView;
