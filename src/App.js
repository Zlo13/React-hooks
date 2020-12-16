import React, {useState, useEffect} from "react"
import TodoList from "./TodoList";
import {Context} from "./context"


export default function App () {

  const [todos, setTodos] = useState([
    // {id: 1, title: 'First todo', completed: false},
    // {id: 2, title: 'Second todo', completed: true},
  ])
  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = event => {
    if (event.key === 'Enter'){
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('')
    }
  }

  // const clickHandler = () => {
  //   console.log('click')
  // }

  useEffect(() => {
    const row = localStorage.getItem('todos') || []
    setTodos(JSON.parse(row))
  }, [])

  useEffect(() => {
    // document.addEventListener('click', clickHandler)
    localStorage.setItem('todos', JSON.stringify(todos))
    // return (() => {
    //   document.removeEventListener('click', clickHandler)
    // })
  }, [todos])

  const removeTodo = id => {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <Context.Provider value={{
      removeTodo, toggleTodo
    }}>
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input
            type="text"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}


