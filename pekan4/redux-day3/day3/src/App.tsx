import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset, decrementByAmount } from './features/counter/couterSlice.ts'
import { fetchUsers } from './features/users/userSlice.ts'
import { fetchTodos } from './features/todos/todoSlice.ts'
import type { RootState, AppDispatch } from './app/store.ts'

function App() {
  const counter = useSelector((state: RootState) => state.counter.value)
  const users = useSelector((state: RootState) => state.users.list)
  const userStatus = useSelector((state: RootState) => state.users.status)
  const todos = useSelector((state: RootState) => state.todos.items)
  const todoStatus = useSelector((state: RootState) => state.todos.status)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>

      {/* Counter Section */}
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>tambah 10</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>kurang 10</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      {/* Users Section */}
      <h2>Users</h2>
      {userStatus === 'loading' && <p>Loading users...</p>}
      {userStatus === 'succeeded' && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}

      {/* Todos Section */}
      <h2>Todos</h2>
      {todoStatus === 'loading' && <p>Loading todos...</p>}
      {todoStatus === 'succeeded' && (
        <ul>
          {todos.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
