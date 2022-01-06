import {combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./couterReducer";
import todoReducer from "./todoReducer";

const reducer = combineReducers({
  counter: counterSlice,
  todo: todoReducer
})

export type ReducerType = ReturnType<typeof reducer>

export default reducer;
