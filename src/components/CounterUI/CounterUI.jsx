import { useContext } from "react"
import CountContext from "../../contexts/CountContext"

// The following comment is whats called a JSDoc string
/**
 * A component for displaying and incrementing global Count variable
 */
function CounterUI() {
  return (
    <div>
      <Display />
      <UserInput />
    </div>
  )
}

function Display() {
  const {count} = useContext(CountContext)

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function UserInput() {
  const {incrementCount} = useContext(CountContext)

  return (
    <div>
      <button onClick={incrementCount} >Increment</button>
    </div>
  )
}

export default CounterUI