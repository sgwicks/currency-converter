import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getCurrency } from '../src/api/currencies'

getCurrency.mockImplementation(
  Promise.resolve({
    usd: {
      code: 'USD',
      alphaCode: 'USD',
      numericCode: '840',
      name: 'U.S. Dollar',
      rate: 1.2378561805398,
      date: 'Wed, 14 Dec 2022 11:55:01 GMT',
      inverseRate: 0.80784829103806
    },
    eur: {
      code: 'EUR',
      alphaCode: 'EUR',
      numericCode: '978',
      name: 'Euro',
      rate: 1.1626785395273,
      date: 'Wed, 14 Dec 2022 11:55:01 GMT',
      inverseRate: 0.86008296016759
    },
    aud: {
      code: 'AUD',
      alphaCode: 'AUD',
      numericCode: '036',
      name: 'Australian Dollar',
      rate: 1.8114253893263,
      date: 'Wed, 14 Dec 2022 11:55:01 GMT',
      inverseRate: 0.55205144296444
    }
  })
)

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
