import { useState } from 'react'
import './App.css'
import ConditionalDemo1 from './components/Conditional-Demo-1';
import ConditionalDemo2 from './components/Conditional-Demo-2';
import ConditionalDemo3 from './components/Conditional-Demo-3';
import ConditionalDemo4 from './components/Conditional-Demo-4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Conditional Demo 1</h2>
        <ConditionalDemo1 /> <hr />

        <h2>Conditional Demo 2</h2>
        <ConditionalDemo2 /><hr />

        <h2>Conditional Demo 3</h2>
        <ConditionalDemo3 /><hr />

        <h2>Conditional Demo 4</h2>
        <ConditionalDemo4 /><hr />
      </div>
    </>
  )
}

export default App
