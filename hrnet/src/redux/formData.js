import { 
    createAction, 
    createReducer,
} from "@reduxjs/toolkit";

// Set the initial state
const initialState = {
  rows: []
}

// Set the action
export const formDataAction = createAction("formDataAction")

// Set the reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(formDataAction, (state, action) => {
    return { state, rows: [...state.rows, action.payload] }
  })
})