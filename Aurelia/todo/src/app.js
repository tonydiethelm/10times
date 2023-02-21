export class App {
  constructor() {
    this.heading = "This is a basic ToDo list using Aurelia";
    this.todoList = ["test", "another test"];
    this.todoInputText = "test run";
  }

  addTodo(){
    console.log('button pushed');
    //this.todoList.push({description: this.todoInputText});
    this.todoList.push(this.todoInputText);
    this.todoInputText = "";
  };



}
