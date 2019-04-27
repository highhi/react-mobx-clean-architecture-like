import { TStore } from "../../stores";
import TodoStore from "../../stores/TodoStore";

export type TTodoListRepository = {
  saveTodo(todo: TodoStore): void
  saveInputValue(value: string): void
  deleteTodo(id: number): void
}

export default class TodoListRepository implements TTodoListRepository {
  private store: TStore

  constructor(store: TStore) {
    this.store = store
  }

  saveInputValue = (value: string) => {
    this.store.todoForm.updateValue(value)
  }

  saveTodo = (todo: TodoStore) => {
    this.store.todoList.addTodo(todo)
  }

  deleteTodo = (id: number) => {
    this.store.todoList.removeTodo(id)
  }
}