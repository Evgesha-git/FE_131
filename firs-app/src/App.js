import { useState, createContext } from 'react';
import './App.css';
import Form from './components/Form';
import ToDos from './components/ToDos';

export const ToDoContext = createContext();

function App() {
  const [todo, setTodo] = useState([]);

  // console.log(todo);

  return (
    <ToDoContext.Provider value={{ todo, setTodo }}>
      <div className="App">
        <Form />
        <ToDos />
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
