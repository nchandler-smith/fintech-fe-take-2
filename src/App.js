import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardHolderName: "",
      ssn: "",
      merchantName:""
    }
  }

setCardHolderName = (cardHolderName) => {
  this.setState({cardHolderName: cardHolderName});
}  

setSsn = (ssn) => {
  this.setState({ssn: ssn});
}

setMerchantName = (merchantName) => {
  this.setState({merchantName: merchantName})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            Card Holder Name:
            <input id="cardHolderName" onChange={event => this.setCardHolderName(event.target.value)}/>
          </label>
          <br/>
          <label>
            SSN:
            <input id="ssn" onChange={event => this.setSsn(event.target.value)}/>
          </label>
          <br/>
          <label>
            Merchant Name
            <input id="merchantName" onChange={event => this.setMerchantName(event.target.value)}/>
          </label>
        </header>
      </div>
    );
  }
}

export default App;
