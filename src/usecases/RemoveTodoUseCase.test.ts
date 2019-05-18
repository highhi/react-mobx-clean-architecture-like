import getStore from '../stores'
import AddTodoUseCase from './AddTodoUseCase'
import RemoveTodoUseCase from './RemoveTodoUseCase'
import TodoListRepository from '../interfaces/repositories/TodoListRepository'

describe('RemoveTodoUseCase', () => {
  let store = getStore()
  let todoListRepository: TodoListRepository
  let addTodoUseCase: AddTodoUseCase
  let removeTodoUseCase: RemoveTodoUseCase

  beforeEach(() => {
    todoListRepository = new TodoListRepository(store)
    addTodoUseCase = new AddTodoUseCase(todoListRepository)
    removeTodoUseCase = new RemoveTodoUseCase(todoListRepository)
  })

  test('execute', () => {
    addTodoUseCase.execute('foobar')
    addTodoUseCase.execute('hogefuga')
    const todo = store.todoList.todos[0]
    removeTodoUseCase.execute(todo.id)
    expect(store.todoList.map.size).toBe(1)
    expect(store.todoList.map.has(todo.id)).toBe(false)
  })
})
