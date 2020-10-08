import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [loading, setLoading] = useState(false);

  const ChangeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {'title': newTodo, 'id': todos.id, 'text': todos.text}]);
  }

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch('https://gyuryhan.github.io/todo_app/src/data.json');
    const initialData = await response.json();
    setTodos(initialData);
    setLoading(false);
  }

  useEffect( () => {
    console.log("rendering", todos);
  },[todos])

  // fetch작업 할 때 useEffect에 직접 넣지 말고 함수를 넣어야 함
  useEffect( () => {
    fetchInitialData();
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
