import { TTodoListRepository } from "../interfaces/repositories/TodoListRepository";

export default class UpdateInputValueUseCase {
  private todoListRepository: TTodoListRepository

  constructor(todoListRepository: TTodoListRepository) {
    this.todoListRepository = todoListRepository
  }

  execute(value: string) {
    this.todoListRepository.saveInputValue(value)
  }
}