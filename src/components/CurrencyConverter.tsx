import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { getCurrency } from '../api/currencies'
import {
  setOptions,
  setAmount,
  setOutput,
  setCurrencyLoading,
  setCurrencyDetails
} from '../store/slices/currencies'
import CurrencySelect from './CurrencySelect'

const CurrencyConverter = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const amount = useAppSelector((state) => state.currencies.amount)
  const output = useAppSelector((state) => state.currencies.output)
  const from = useAppSelector((state) => state.currencies.from)
  const to = useAppSelector((state) => state.currencies.to)
  const details = useAppSelector((state) => state.currencies.details)
  const currencyLoading = useAppSelector((state) => state.currencies.loading)
  const dispatch = useAppDispatch()

  // Essentially, load the possible options when we load this component
  const getOptions = async () => {
    const currencyJSON = await getCurrency('gbp')
    const currencies = []
    for (const key in currencyJSON) {
      const { code, name } = currencyJSON[key]
      currencies.push({ code, name })
    }
    dispatch(setOptions(currencies))
    setLoading(false)
  }

  const getDetails = async (code: string) => {
    dispatch(setCurrencyLoading(true))
    try {
      const currencyJSON = await getCurrency(code)
      dispatch(setCurrencyDetails(currencyJSON))
    } finally {
      dispatch(setCurrencyLoading(false))
    }
  }

  useEffect(() => {
    void getOptions()
  }, []) /*eslint-disable-line */ // wants to add getOptions as a dependency, but that's infinite

  useEffect(() => {
    if (!from || !to) return
    void getDetails(from)
  }, [from, to])

  useEffect(() => {
    if (!details || !to || !from) return
    const rate = details[to.toLowerCase()]?.rate || 0
    const total = amount * rate
    dispatch(setOutput(Number(total.toFixed(2))))
  }, [details, from, to, amount, dispatch])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <CurrencySelect type="from" />
      <input
        type="number"
        value={amount || ''}
        onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
      />
      <CurrencySelect type="to" />
      <div>Total: {currencyLoading ? 'Calculating...' : output}</div>
    </div>
  )
}

export default CurrencyConverter
