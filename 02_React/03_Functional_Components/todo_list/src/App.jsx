import './App.css';
import { useState } from 'react'
import AddTodo from './components/AddTodo';
import Display from './components/Display';

function App() {
  // todos is a list of objects
  // task, isComplete
  const [todos, addToDo] = useState([]);

  return (
    <fieldset>
      <legend>App</legend>
      <div>
        <AddTodo todos={todos} aTD={addToDo} />
        <Display todos={todos} aTD={addToDo} />
      </div>
    </fieldset>
  );
}

export default App;
