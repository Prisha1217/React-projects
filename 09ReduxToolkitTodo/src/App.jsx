import { useState } from 'react'
import AddTodos from './components/AddTodos'
import './App.css'
import Todo from './components/Todo'


function App() {
  return (
    <>
      <AddTodos />
      <Todo />
    </>
  )
}

export default App
