import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/store'
import { getCurrency } from '../api/currencies'
import { setOptions } from '../store/slices/currencies'

const CurrencyConverter = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const options = useAppSelector((state) => state.currencies.options)
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

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <ul>
        {options.map((option) => (
          <li key={option.code}>{option.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CurrencyConverter
