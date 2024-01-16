import { useState } from 'react'
import './App.css'
import BookList from './components/booklist';
import MovieList from './components/movielist';
import ToDoList from './components/todolist';

function App() {
  
  return (
    <>
      <div>
        <BookList />
        <MovieList />
        <ToDoList />
      </div>
    </>
  )
}

export default App
