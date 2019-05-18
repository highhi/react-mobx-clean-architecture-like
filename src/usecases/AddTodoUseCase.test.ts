import getStore from '../stores'
import AddTodoUseCase from './AddTodoUseCase'
import TodoListRepository from '../interfaces/repositories/TodoListRepository'

describe('AddTodoUseCase', () => {
  let store = getStore()
  let todoListRepository: TodoListRepository
  let useCase: AddTodoUseCase

  beforeEach(() => {
    todoListRepository = new TodoListRepository(store)
    useCase = new AddTodoUseCase(todoListRepository)
  })

  test('execute', () => {
    useCase.execute('foobar')
    const todo = store.todoList.todos[0]
    expect(store.todoList.map.has(todo.id)).toBe(true)
    expect(todo.title).toBe('foobar')
  })
})
