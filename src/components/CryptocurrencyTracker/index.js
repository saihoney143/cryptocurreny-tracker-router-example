import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  setCryptoCurrencies = (fetchedData, loadingStatus) => {
    this.setState({
      cryptoCurrenciesData: fetchedData.map(eachCryptoCurrency => ({
        id: eachCryptoCurrency.id,
        currencyLogoUrl: eachCryptoCurrency.currency_logo,
        currencyName: eachCryptoCurrency.currency_name,
        usdValue: eachCryptoCurrency.usd_value,
        euroValue: eachCryptoCurrency.euro_value,
      })),
      isLoading: loadingStatus,
    })
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    this.setCryptoCurrencies(fetchedData, false)
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
