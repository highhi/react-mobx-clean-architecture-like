import React, { useCallback, useContext } from 'react'
import TodoComponent from '../../components/Todo'
import { Observer } from 'mobx-react-lite';
import TodoListController from '../../interfaces/controllers/TodoListController';
import { StoreContext } from '../../stores';
import shallowEqual from '../../utils/shallowEqual';

type TProps = {
  todo: {
    id: number
    title: string
    createdAt: string
  }
}

const Todo: React.FC<TProps> = React.memo(({ todo }) => {
  const store = useContext(StoreContext)
  const controller = new TodoListController(store)
  const onClick = useCallback(() => {
    controller.removeTodo(todo.id)
  }, [])

  return (
    <Observer>
      {() =>
        <TodoComponent todo={todo} onClick={onClick} />
      }
    </Observer>
  )
}, (prev, next) => {
  return !shallowEqual(prev.todo, next.todo)
})

export default Todo
