import getStore from '../stores'
import AddTodoUseCase from './AddTodoUseCase'
import UpdateInputValueUseCase from './UpdateInputValueUseCase'
import TodoListRepository from '../interfaces/repositories/TodoListRepository'

describe('UpdateInputValueUseCase', () => {
  let store = getStore()
  let todoListRepository: TodoListRepository
  let useCase: UpdateInputValueUseCase

  beforeEach(() => {
    todoListRepository = new TodoListRepository(store)
    useCase = new UpdateInputValueUseCase(todoListRepository)
  })

  test('execute', () => {
    useCase.execute('foobar')
    expect(store.todoForm.inputValue).toBe('foobar')
  })
})
