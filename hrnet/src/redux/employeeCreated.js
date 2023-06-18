import { createAction, 
    createReducer,
 } from "@reduxjs/toolkit";

// Set the initial state
const initialState = {
  data: false
}

// Set the action
export const employeeCreatedAction = createAction("employeeCreatedAction")

// Set the reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(employeeCreatedAction, (state, action) => {
    state.data = action.payload
  })
})