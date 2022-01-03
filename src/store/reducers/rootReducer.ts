import {combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./couterReducer";

const reducer = combineReducers({
  counter: counterSlice,
})

export type ReducerType = ReturnType<typeof reducer>

export default reducer;
