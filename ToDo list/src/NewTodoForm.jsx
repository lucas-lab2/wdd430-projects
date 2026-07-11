import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedItem = newItem.trim()
    if (trimmedItem === "") return

    onSubmit(trimmedItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New task</label>
        <input
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
          type="text"
          id="item"
          placeholder="What do you need to do?"
          autoComplete="off"
        />
      </div>
      <button className="btn btn-add" type="submit">
        Add task
      </button>
    </form>
  )
}
