import dayjs from 'dayjs'
import { TStore } from "../../stores";

export default class TodoListPresenter {
  private store: TStore

  constructor(store: TStore) {
    this.store = store
  }

  getAll = (): { id: number, title: string, createdAt: string }[] => {
    return this.store.todoList.todos.map((todo) => {
      return {
        id: todo.id,
        title: todo.title,
        createdAt: dayjs(todo.createdAt).format('YYYY-MM-DD HH:mm:ss'),
      }
    })
  }

  getInputValue = (): string => {
    return this.store.todoForm.inputValue
  }
}
