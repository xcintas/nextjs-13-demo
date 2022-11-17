import React from 'react';
import Link from 'next/link';
import { Todo } from '../../typings';

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos: Todo[] = await res.json();
  return todos;
}

async function TodoList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo: Todo) => (
        <p key={todo.id} className="p-2">
          <Link href={`/todos/${todo.id}`}>
            Todo: {todo.id}
          </Link>
        </p>
      ))}
    </>
  )
}

export default TodoList;