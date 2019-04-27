import React from 'react'
import Todo from '../../container/Todo';

type TProps = {
  todos: {
    id: number
    title: string
    createdAt: string
  }[]
}

const TodoList: React.FC<TProps> = ({ todos }) => {
  return <ul>{todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />
  })}</ul>
}

export default TodoList
