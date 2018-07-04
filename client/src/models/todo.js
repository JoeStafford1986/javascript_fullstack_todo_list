const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Todo = function(url) {
  this.url = url;
};

Todo.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((todos) => {
      console.log(todos);
      PubSub.publish('Todo:data-loaded', todos);
    })
    .catch(console.error);
};

module.exports = Todo;
