import { decorate, action, observable } from 'mobx'

export type TTodoStore = {
  id: number
  title: string
  createdAt: number
}

export default class TodoStore implements TTodoStore {
  id = Math.random()
  title = ''
  createdAt = Date.now()

  constructor(title: string = '') {
    this.title = title
  }

  update = (title: string) => {
    this.title = title
  }
}

decorate(TodoStore, {
  title: observable.ref,
  update: action,
})
