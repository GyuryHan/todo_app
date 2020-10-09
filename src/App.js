import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [loading, setLoading] = useState(true);

  const ChangeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  const getTodos = async () => {
    const response = await axios.get('https://gyuryhan.github.io/todo_app/data/data.json');
        setTodos(response) ;
        setLoading(false);
  }

  useEffect( () => {
    console.log("rendering", todos);
  },[todos])

  // fetch작업 할 때 useEffect에 직접 넣지 말고 함수를 넣어야 함
  useEffect( () => {
    // fetchInitialData();
    getTodos();
  },[])
 

  return (
    <>
    <h1>todo_App</h1>

    <form action="">
      <input type="text" name="" onChange={ChangeInputData}/>
      <button onClick={addTodo}>추가</button>
    </form>
    <List todos={todos} loading={loading}/>
    </>
  )
}



export default App;
