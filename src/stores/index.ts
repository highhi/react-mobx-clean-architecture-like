import React from 'react'
import TodoListStore from './TodoListStore'
import TodoFormStore from './TodoFormStore'

export type TStore = ReturnType<typeof getStore>

export default function getStore() {
  return {
    todoList: new TodoListStore(),
    todoForm: new TodoFormStore()
  }
}

export const StoreContext = React.createContext({} as TStore)
