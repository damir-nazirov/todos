import { createSlice} from '@reduxjs/toolkit'


const initialState = { 
    filter: 'all'
 }

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { changeFilter } = filtersSlice.actions
export default filtersSlice.reducer


