import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props

  return (
    <li className="item-container">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={cryptoCurrencyData.currencyLogoUrl}
          alt={cryptoCurrencyData.currencyName}
        />
        <p className="currency-name">{cryptoCurrencyData.currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{cryptoCurrencyData.usdValue}</p>
        <p className="currency-value">{cryptoCurrencyData.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
