import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import currenciesReducer from './slices/currencies'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    currencies: currenciesReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
