let app = angular.module("todoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
  this.editMode = false;
  this.todos = ["learn Angular 1", "blah 2", "blah3"];

  this.addNewTodo = function() {
    this.todos.push(this.newTodo);
    this.newTodo = "";
  };

  this.removeTodo = function(index) {
    this.todos.splice(index, 1);
  };

  this.toggleEditMode = function() {
    this.editMode = !this.editMode;
  };
}
