import { decorate, action, observable, computed } from 'mobx'
import { TTodoStore } from '../TodoStore'

export type TTodoListStore = {
  todos: TTodoStore[]
  addTodo(todo: TTodoStore): void
  removeTodo(id: number): void
}

export default class TodoListStore implements TTodoListStore {
  map = new Map<number, TTodoStore>()

  get todos() {
    return Array.from(this.map.values())
  }

  addTodo = (todo: TTodoStore) => {
    this.map.set(todo.id, todo)
  }

  removeTodo = (id: number) => {
    this.map.delete(id)
  }
}

decorate(TodoListStore, {
  map: observable.shallow,
  todos: computed,
  addTodo: action,
  removeTodo: action,
})
