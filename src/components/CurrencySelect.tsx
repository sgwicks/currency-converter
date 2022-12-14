import React, { FunctionComponent } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/store'
import { setCurrency } from '../store/slices/currencies'

interface CurrencySelectProps {
  type: 'from' | 'to'
}

const CurrencySelect: FunctionComponent<CurrencySelectProps> = ({ type }) => {
  const options = useAppSelector((state) => state.currencies.options)
  const value = useAppSelector((state) => state.currencies[type])
  const dispatch = useAppDispatch()

  return (
    <label>
      Convert {type}:
      <select
        value={value}
        onChange={(e) => dispatch(setCurrency({ code: e.target.value, type }))}
      >
        <option value={undefined}>Choose a currency</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default CurrencySelect
