import React from 'react'
import TodoList from './TodoList';

function Todo() {
  return (
    <div>I am the Todo
      {/*@ts-ignore*/}
      <TodoList />
    </div>
  )
}

export default Todo;