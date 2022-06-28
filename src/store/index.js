import { configureStore } from '@reduxjs/toolkit';
import filter from '../reducers/filtersSlice'
import inputTodo from '../reducers/todoInputSlice'

const store = configureStore({
    reducer: {inputTodo, filter},
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
