import React from 'react'
import { useAppSelector } from '../hooks/store'

const CurrencySelect = () => {
  const options = useAppSelector((state) => state.currencies.options)
  return (
    <select>
      {options.map((option) => (
        <option key={option.code}>{option.name}</option>
      ))}
    </select>
  )
}

export default CurrencySelect
