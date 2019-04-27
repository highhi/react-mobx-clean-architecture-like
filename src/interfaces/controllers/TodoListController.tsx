import { TStore } from "../../stores";
import TodoListRepository from "../repositories/TodoListRepository";
import AddTodoUseCase from "../../usecases/AddTodoUseCase";
import UpdateInputValueUseCase from "../../usecases/UpdateInputValueUseCase";
import RemoveTodoUseCase from "../../usecases/RemoveTodoUseCase";

export default class TodoListController {
  private addTodoUseCase: AddTodoUseCase
  private removeTodoUseCase: RemoveTodoUseCase
  private updateInputValueUseCase: UpdateInputValueUseCase

  constructor(store: TStore) {
    const todoListRepository = new TodoListRepository(store)
    this.addTodoUseCase = new AddTodoUseCase(todoListRepository)
    this.removeTodoUseCase = new RemoveTodoUseCase(todoListRepository)
    this.updateInputValueUseCase = new UpdateInputValueUseCase(todoListRepository)
  }

  addTodo = (title: string) => {
    this.addTodoUseCase.execute(title)
  }

  removeTodo = (id: number) => {
    this.removeTodoUseCase.execute(id)
  }

  updateInputValue = (value: string) => {
    this.updateInputValueUseCase.execute(value)
  }
}