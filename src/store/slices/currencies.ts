import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type currency = {
  code: string
  name: string
}

interface CurrencyState {
  options: currency[]
  from?: string
  to?: string
}

const initialState: CurrencyState = {
  options: [],
  from: undefined,
  to: undefined
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    // I'd rather learn to use thunks, but this is all new to me and time is precious
    setOptions: (state, action: PayloadAction<currency[]>) => {
      state.options = action.payload
    },
    reset: (state) => {
      state.options = []
      state.from = undefined
      state.to = undefined
    },
    setCurrency: (
      state,
      action: PayloadAction<{ code: string; type: 'from' | 'to' }>
    ) => {
      state[action.payload.type] = action.payload.code
    }
  }
})

export const { setOptions, reset, setCurrency } = currencySlice.actions

export default currencySlice.reducer
