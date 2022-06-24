import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tasks/>
    </div>
  )
}

export default App
