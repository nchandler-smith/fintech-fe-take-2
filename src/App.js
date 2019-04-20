import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardHolderName: ""
    }
  }

setCardHolderName = (cardHolderName) => {
  this.setState({cardHolderName: cardHolderName});
}  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            Card Holder Name:
            <input id="cardHolderName" onChange={event => this.setCardHolderName(event.target.value)}/>
          </label>
        </header>
      </div>
    );
  }
}

export default App;
