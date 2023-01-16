// Libraries
import { useState } from 'react'
// CSS
import './App.css'
// Contexts
import CountContext from './contexts/CountContext'
// Components
import CounterUI from './components/CounterUI/CounterUI'

function App() {
  const [count, setCount] = useState(10)

  function incrementCount() {
    setCount(
      (oldCount) => oldCount + 1
    )
  }

  return (
    <CountContext.Provider value={{count, incrementCount}}>
      <div className="App">
        <CounterUI />
      </div>
    </CountContext.Provider>
  )
}

export default App
