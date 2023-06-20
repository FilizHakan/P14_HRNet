import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./formData";
import employeeCreatedReducer from "./employeeCreated";

const store = configureStore
({
  reducer: 
  {
    employeeCreated: employeeCreatedReducer,
    formData: formDataReducer
  }
});

export default store;