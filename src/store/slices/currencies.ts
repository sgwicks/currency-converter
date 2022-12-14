import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

import { getCurrency } from '../../api/currencies'

interface CurrencyState {
  options: { code: string; name: string }[]
}

const initialState: CurrencyState = {
  options: []
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    // I'd rather learn to use thunks, but this is all new to me and time is precious
    setOptions: (
      state,
      action: PayloadAction<{ code: string; name: string }[]>
    ) => {
      state.options = action.payload
    }
  }
})

export const { setOptions } = currencySlice.actions

export default currencySlice.reducer
