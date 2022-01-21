import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoType {
  id: string,
  done: boolean,
  todo: string,
  createDate: string,
  endDate: string,
}
interface CheckDoneType {
  id: string,
  done: boolean
}
interface removeType {
  id: string
}
interface UpdateType {
  id: string,
  todo: string
}

export const initialState: Array<TodoType> = []

export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload)
    },
    update: (state, action: PayloadAction<UpdateType>) => {
      const { id, todo } = action.payload
      return state.map(el => el.id === id ? {...el, todo: todo} : el)

    },
    remove: (state, action: PayloadAction<removeType>) => {
      const { id } = action.payload
      state = state.filter(el => el.id !== id)
    },
    checkDone: (state, action: PayloadAction<CheckDoneType>) => {
      const { id, done } = action.payload
      return state.map(el => el.id === id ? {...el, done} : el)
    },
  }
})

export const { create, update, remove, checkDone } = todoReducer.actions

export default todoReducer.reducer
