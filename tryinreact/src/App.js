//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function addTodo(event){
  //event.preventDefault();

}


function App() {
  //state
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
      <form onsubmit={addTodo}>

      </form>

    </div>

    
);
}

export default App;
