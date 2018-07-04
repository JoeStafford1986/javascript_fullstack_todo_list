const Todo = require('./models/todo.js');
const TodoListView = require('./views/todo_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const todoListContainer = document.querySelector('#todo-list');
  const todoListView = new TodoListView(todoListContainer);
  todoListView.bindEvents();

  const dataURL = 'http://localhost:3000/api/todo';
  const todo = new Todo(dataURL);
  todo.getData();
});
