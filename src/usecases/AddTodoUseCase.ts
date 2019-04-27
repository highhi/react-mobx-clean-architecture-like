import { TTodoListRepository } from "../interfaces/repositories/TodoListRepository";
import TodoStore from "../stores/TodoStore";

export default class AddTodoUseCase {
  private todoListRepository: TTodoListRepository

  constructor(todoListRepository: TTodoListRepository) {
    this.todoListRepository = todoListRepository
  }

  execute(title: string) {
    const todo = new TodoStore(title)
    this.todoListRepository.saveTodo(todo)
    this.todoListRepository.saveInputValue('')
  }
}