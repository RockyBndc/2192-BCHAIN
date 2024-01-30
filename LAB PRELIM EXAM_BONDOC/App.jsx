import { useState } from 'react'
import Prelimexam from './components/prelimexam';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Things to Bring</h1>
        <hr />
        <Prelimexam></Prelimexam>
      </div>
    </>
  )
}

export default App
