import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/store'
import { getCurrency } from '../api/currencies'
import { setOptions } from '../store/slices/currencies'
import CurrencySelect from './CurrencySelect'

const CurrencyConverter = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

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

  useEffect(() => {
    void getOptions()
  }, []) /*eslint-disable-line */ // wants to add getOptions as a dependency, but that's infinite

  return loading ? <div>Loading...</div> : <CurrencySelect />
}

export default CurrencyConverter
