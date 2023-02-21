export class App {
  constructor() {
    this.heading = "This is a basic ToDo list using Aurelia";
    this.todoList = [""];
    this.todoInputText = "";
  }

  addTodo(){
    console.log('button pushed');
    //this.todoList.push({description: this.todoInputText});
    this.todoList.push(this.todoInputText);
    this.todoInputText = "";
  };



}
