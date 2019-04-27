import React from 'react'

type TProps = {
  todo: {
    title: string
    // createdAt: string
  }
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Todo: React.FC<TProps> = ({ todo, onClick }) => {
  return <li>
    {todo.title}
    <button type="button" onClick={onClick}>Delete</button>
  </li>
}

export default Todo
