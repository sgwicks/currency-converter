import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks/store'
import { increment, decrement } from './store/slices/counter'

const App = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <button
        aria-label="Increment Value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement Value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default App
