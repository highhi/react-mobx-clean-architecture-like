import React from 'react'

export type TProps = {
  inputValue?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoForm: React.FC<TProps> = ({ inputValue, onSubmit, onChange }) => {
  return <form onSubmit={onSubmit}>
    <input type="text" name="input" value={inputValue} onChange={onChange} />
    <button type="submit">ADD</button>
  </form>
}

TodoForm.defaultProps = {
  inputValue: ''
}

export default TodoForm
