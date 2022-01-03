import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers/rootReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer,
  middleware: [logger]
})

export type AppDispatch = typeof store.dispatch

export default store;
