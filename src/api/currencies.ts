import axios from 'axios'

// If I were being super-serious about this, I'd have a list of allowable Currency strings
export interface Currency {
  [k: string]: {
    code: string
    alphaCode: string
    numericCode: string
    name: string
    rate: number
    date: string
    inverseRate: number
  }
}

const getCurrency = (currency: string) => {
  return axios
    .get<Currency>(`http://www.floatrates.com/daily/${currency}.json`)
    .then((res) => {
      return res.data
    })
}

export { getCurrency }
