import { createSlice } from '@reduxjs/toolkit'


export const value =  createSlice ({
    initialState: [0],
    name: "GetProduct",
    reducers: {
      getValue: (state,action) => {
        state.push(action.payload)
      },
      clear: (state,action) => {
        return []
      }
    }
})


export const {getValue,clear} = value.actions;
export default value.reducer;