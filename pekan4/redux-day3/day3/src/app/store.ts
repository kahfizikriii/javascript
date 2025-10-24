import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/couterSlice.ts'
import userReducer from '../features/users/userSlice.ts'
import todoReducer from '../features/todos/todoSlice.ts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
