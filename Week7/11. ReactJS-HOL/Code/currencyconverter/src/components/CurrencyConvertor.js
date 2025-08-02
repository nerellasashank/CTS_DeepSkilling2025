import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      targetCurrency: 'EUR',
      convertedAmount: '',
    };

    this.exchangeRates = {
      EUR: 0.011,
      USD: 0.012,
      GBP: 0.0095,
      AUD: 0.017,
      CAD: 0.015,
      JPY: 1.5,
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ targetCurrency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, targetCurrency } = this.state;

    if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount greater than zero.');
      return;
    }

    const rate = this.exchangeRates[targetCurrency];
    const converted = (amount * rate).toFixed(2);
    this.setState({ convertedAmount: converted });
  };

  render() {
    const { amount, targetCurrency, convertedAmount } = this.state;
    const labelStyle = { display: 'inline-block', width: '80px', fontWeight: 'bold', marginRight: '10px' };
    const inputStyle = { padding: '5px', marginBottom: '10px', width: '200px' };

    return (
      <div>
        <h3 style={{ color: 'green' }}>Currency Convertor</h3>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={labelStyle} htmlFor="amountInput">Amount:</label>
            <input
              id="amountInput"
              type="number"
              placeholder="Enter amount in INR"
              value={amount}
              onChange={this.handleAmountChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={labelStyle} htmlFor="currencySelect">Currency:</label>
            <select
              id="currencySelect"
              value={targetCurrency}
              onChange={this.handleCurrencyChange}
              style={inputStyle}
            >
              <option value="EUR">Euro (EUR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
            </select>
          </div>
          <button type="submit">Convert</button>
        </form>
        {convertedAmount && (
          <h4>
            Converted Amount: {convertedAmount} {targetCurrency}
          </h4>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;