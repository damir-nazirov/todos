import { createSlice} from '@reduxjs/toolkit'


const initialState = { 
    todos: []
 }

const todoInputSlice = createSlice({
  name: 'inputTodo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    toggleDone(state, action){
      state.todos = state.todos.map(item => {
        if (item.id === action.payload) {
          return {...item, done: !item.done}
        }
        return item
      
      })
    },
    clearDone(state){
      state.todos = state.todos.filter(item => {
        return item.done === false;
        
    })
    }
  },
})

export const { addTodo, toggleDone, clearDone } = todoInputSlice.actions
export default todoInputSlice.reducer


