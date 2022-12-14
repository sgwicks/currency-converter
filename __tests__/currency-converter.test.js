import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import store from '../src/store'
import { Provider } from 'react-redux'

import CurrencySelect from '../src/components/CurrencySelect.tsx'

import { setOptions } from '../src/store/slices/currencies'

describe('CurrencyConverter', () => {
  describe('CurrencySelect', () => {
    test('Displays a list of currencies', async () => {
      store.dispatch(
        setOptions([
          {
            code: 'USD',
            name: 'U.S. Dollar'
          },
          {
            code: 'EUR',
            name: 'Euro'
          },
          {
            code: 'AUD',
            name: 'Australian Dollar'
          }
        ])
      )
      const user = userEvent.setup()
      const { getByRole, getByText } = render(
        <Provider store={store}>
          <CurrencySelect />
        </Provider>
      )

      const select = getByRole('combobox')
      await user.click(select)
      getByText('Euro')
      getByText('Australian Dollar')
      getByText('U.S. Dollar')
    })
  })
})
