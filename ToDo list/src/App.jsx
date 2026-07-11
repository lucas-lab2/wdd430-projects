import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

const starterTodos = [
  { id: "react-components", title: "Study React components", completed: false },
  { id: "github-project", title: "Publish project to GitHub", completed: false },
]

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("TODOS")

    if (savedTodos == null) return starterTodos

    try {
      return JSON.parse(savedTodos)
    } catch {
      return starterTodos
    }
  })

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === id) return { ...todo, completed }

        return todo
      })
    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <main className="todo-app">
      <header className="app-header">
        <p className="eyebrow">WDD 430 React Project</p>
        <h1>My Todo List</h1>
        <p className="subtitle">Add tasks, mark them complete, or remove them.</p>
      </header>

      <NewTodoForm onSubmit={addTodo} />

      <section className="todo-section" aria-labelledby="todo-heading">
        <div className="section-heading">
          <h2 id="todo-heading">Tasks</h2>
          <span className="task-count">
            {todos.length} {todos.length === 1 ? "item" : "items"}
          </span>
        </div>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </section>
    </main>
  )
}
