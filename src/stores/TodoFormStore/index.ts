import { decorate, action, observable } from 'mobx'

export default class TodoFormStore {
  inputValue = ''

  updateValue = (inputValue: string) => {
    this.inputValue = inputValue
  }
}

decorate(TodoFormStore, {
  inputValue: observable.ref,
  updateValue: action,
})
