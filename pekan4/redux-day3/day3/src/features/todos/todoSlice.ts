import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined | null;
}

// async thunk untuk fetch data
export const fetchTodos = createAsyncThunk<Todo[]>(
  'todos/fetchTodos',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await res.json()
    return data
  }
)

const initialState: TodosState = {
  items: [],
  status: 'idle',
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default todoSlice.reducer
