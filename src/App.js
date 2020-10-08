import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';

const App = () => {
  // const [todos, setTodos] = useState(['react공부']);
  // const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([
      {
        id: 1,
        title: "할일 1",
        checked: true
      },
      {
        id: 2,
        title: "할일 2",
        checked: false
      },
      {
        id: 3,
        title: "할일 3",
        checked: true
      }
    ]);

  const ChangeInputData = (e) => {
    setTodos(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([todos]);
  }

  useEffect( () => {
    console.log("rendering", todos);
  }, [todos])

  // const fetchInitialData = async () => {
  //   const response = await fetch('http//localhost:8080/todo');
  //   const initialData = await response.json();
  //   setTodos(initialData);
  // }

  //  -- > fetch작업 할 때 useEffect에 직접 넣지 말고 함수를 넣어야 함
  // useEffect( () => {
  //   fetchInitialData();
  // })
 

  return (
    <>
    <h1>todo_App</h1>

    <form action="">
      <input type="text" name="" onChange={ChangeInputData}/>
      <button onClick={addTodo}>추가</button>
    </form>

    <List todos={todos}/>
    </>
  )
}



export default App;
