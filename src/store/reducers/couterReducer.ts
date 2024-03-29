import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterType {
  value: number
}

const initialState: CounterType = {
  value: 0
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterReducer.actions

export default counterReducer.reducer
