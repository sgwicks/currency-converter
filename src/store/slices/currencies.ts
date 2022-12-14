import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Currency } from 'src/api/currencies'

type currency = {
  code: string
  name: string
}

interface CurrencyState {
  options: currency[]
  from?: string
  to?: string
  amount: number
  output: number
  loading: boolean
  details: Currency | null
}

const initialState: CurrencyState = {
  options: [],
  from: undefined,
  to: undefined,
  amount: 0,
  output: 0,
  loading: false,
  details: null
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
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
    setOutput: (state, action: PayloadAction<number>) => {
      state.output = action.payload
    },
    setCurrencyLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCurrencyDetails: (state, action: PayloadAction<Currency>) => {
      state.details = action.payload
    }
  }
})

export const {
  setOptions,
  reset,
  setCurrency,
  setAmount,
  setOutput,
  setCurrencyLoading,
  setCurrencyDetails
} = currencySlice.actions

export default currencySlice.reducer
