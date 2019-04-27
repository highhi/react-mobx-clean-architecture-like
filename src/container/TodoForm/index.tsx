import React, { useCallback, useContext } from 'react'
import Component from '../../components/TodoForm'
import { StoreContext } from '../../stores';
import { Observer } from 'mobx-react-lite'
import TodoListController from '../../interfaces/controllers/TodoListController';
import TodoListPresenter from '../../interfaces/presenters/TodoListPresenter';

const TodoForm: React.FC = () => {
  const store = useContext(StoreContext)
  const controller = new TodoListController(store)
  const presenter = new TodoListPresenter(store)

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.currentTarget.value.trim()
    controller.updateInputValue(value)
  }, [controller])

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const value = form.get('input') as string
    controller.addTodo(value)
  }, [controller])

  return(
    <Observer>
      {() =>
        <Component inputValue={presenter.getInputValue()} onChange={onChange} onSubmit={onSubmit} />
      }
    </Observer>
  )
}

export default TodoForm
