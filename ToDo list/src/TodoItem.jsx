export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className={completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={event => toggleTodo(id, event.target.checked)}
        />
        <span className="custom-checkbox" aria-hidden="true" />
        <span className="todo-title">{title}</span>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
        type="button"
        aria-label={`Delete ${title}`}
      >
        Delete
      </button>
    </li>
  )
}
