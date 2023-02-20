import React, {useState} from 'react';
import './App.css';

function App() {
  //set up state to track my input and my todolist. 
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  //handleclick functions.
  const handleClick = () => {
    setTodoList((prev) => [
      ...prev,
      {
        task: input,
      },
    ]);
    setInput(""); //changes state, so waterfalls and resets box. Cheap and easy way. 
  };

  //My UI elements
  return (
    <div className="App">
      <h2>This is a basic ToDo list made with React</h2>
      
      <ul>
        {todoList.map((todo) => {
          return (
            <li>{todo.task}</li>
          );
          })}
      </ul>
      
      <form>
        <input type="text" id="text" value={input} onInput={(e) =>setInput(e.target.value)}/>
        <input type="button" onClick={() => handleClick()} value="Press to add Todo to list"/>
      </form>

      
    </div>
  );
}

export default App;
