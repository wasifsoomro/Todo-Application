import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [todos, setTodos] =  useState<{ name: string; completed: boolean }[]>([]);

  const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const pendingTasks = totalTasks - completedTasks

  return (
    <>
      <div>
        <Header />
        <Todo todos={todos} setTodos={setTodos}/>
        <Footer totalTasks={totalTasks} completedTasks={completedTasks} pendingTasks={pendingTasks}/>
      </div>
    </>
  )
}

export default App
