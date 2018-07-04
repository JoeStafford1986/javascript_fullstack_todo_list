const PubSub = require('../helpers/pub_sub.js');

const TodoFormView = function(form){
  this.form = form;
};

TodoFormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (event) =>{
    this.handleSubmit(event);
  });
};

TodoFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newTodo = this.createTodo(event.target);
  PubSub.publish('TodoFormView:todo-submitted', newTodo);
  event.target.reset();
};

TodoFormView.prototype.createTodo = function (form) {
  const newTodo = {
    title: form.title.value
  };

  return newTodo;
};

module.exports = TodoFormView;
