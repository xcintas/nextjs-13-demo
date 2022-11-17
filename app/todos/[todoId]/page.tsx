import React from 'react';
import { Todo } from '../../../typings';

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    next: { revalidate: 60 }
  });
  const todo: Todo = await res.json();
  return todo;
}

async function Todo({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  return (
    <div className="p-10 bg-green-400">
      <p>#{todo.id}: {todo.title}</p>
      <p>Completed: {todo.completed ? "yes" : "no"} </p>
    </div>
  )
}

export default Todo;

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    next: { revalidate: 60 }
  });
  const todos: Todo[] = await res.json();

  return todos.slice(0, 10).map(todo => ({
    todoId: todo.id.toString()
  }))
}