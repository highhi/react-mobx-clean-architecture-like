import { TTodoListRepository } from "../interfaces/repositories/TodoListRepository";

export default class RemoveTodoUseCase {
  private todoListRepository: TTodoListRepository

  constructor(todoListRepository: TTodoListRepository) {
    this.todoListRepository = todoListRepository
  }

  execute(id: number) {
    this.todoListRepository.deleteTodo(id)
  }
}
