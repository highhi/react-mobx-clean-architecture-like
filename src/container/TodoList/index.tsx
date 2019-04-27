import React, { useContext } from 'react'
import Component from '../../components/TodoList'
import { StoreContext } from '../../stores';
import { Observer } from 'mobx-react-lite';
import TodoListPresenter from '../../interfaces/presenters/TodoListPresenter';

const TodoList: React.FC = () => {
  const store = useContext(StoreContext)
  const presenter = new TodoListPresenter(store)

  return(
    <Observer>
      {() => <Component todos={presenter.getAll()} /> }
    </Observer>
  )
}

export default TodoList
