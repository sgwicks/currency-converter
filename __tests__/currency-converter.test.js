import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CurrencySelect from '../src/components/CurrencySelect.tsx'

describe('CurrencyConverter', () => {
  describe('CurrencySelect', () => {
    test('User can select a currency', () => {
      const user = userEvent.setup()
      const { getByRole, getByText } = render(<CurrencySelect />)

      const select = getByRole('combobox', { hidden: true })
      user.click(select)
      user.click(getByText('U. S. Dollar'))
    })
  })
})
