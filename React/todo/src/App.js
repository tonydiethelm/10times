import React, {useState} from 'react';
import './App.css';

function App() {
  //set up state to track my input and my todolist. 
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [catFact, setCatFact] = useState("");

  //handleclick functions.
  //get todo, put in todo list in state
  //clear the input box
  //update cat facts in state
  const handleClick = () => {
    console.log('button was clicked.')
    //update todo list
    setTodoList((prev) => [
      ...prev,
      {
        task: input,
      },
    ]);
    //reset text box to ""
    setInput("");
    //update state with new cat fact
    setCatFact(() => {getCatFact()});
  };

  //function to get cat facts
  async function getCatFact(){
    console.log('attempting to get cat fact');
    const response = await fetch('https://catfact.ninja/fact')
    const catFact = await response.json();
    console.log('cat fact is: ', catFact.fact);
    return catFact.fact;
  }

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

      <p>Here is a random cat fact: {catFact}</p>



    </div>
  );
}

export default App;
