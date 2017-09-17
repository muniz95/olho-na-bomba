import React, { Component } from 'react';
import { Button, Icon, Input, Row } from 'react-materialize'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      fuel: undefined,
      price: undefined,
      bill: undefined,
      liters: undefined,
      result: ''
    }

    this.updateBill = this.updateBill.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateLiters = this.updateLiters.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  updatePrice(event) {
    this.setState({price: event.target.value});
  }

  updateBill(event) {
    this.setState({bill: event.target.value});
  }

  updateLiters(event) {
    this.setState({liters: event.target.value});
  }

  calculate(event) {
    const bill = Number.parseFloat(this.state.bill)
    const price = Number.parseFloat(this.state.price)
    const liters = Number.parseFloat(this.state.liters)
    const result = liters - (bill / price)
    if (result > 0)
      this.setState({ result: `Abastecida com ${result.toFixed(2)} litros a mais`})
    else if (result < 0)
      this.setState({result: `Abastecida com ${Math.abs(result).toFixed(2)} litros a menos`})
    else
      this.setState({result: `O valor da bomba está OK`})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Descubra se o valor na bomba está de acordo</h4>
        </div>
        <Row>
          <Input type="number" value={this.state.price} onChange={this.updatePrice} s={6} label="Preço por litro" />
          <Input type="number" value={this.state.bill} onChange={this.updateBill} s={6} label="Total a ser pago" />
          <Input type="number" value={this.state.liters} onChange={this.updateLiters} s={12} label="Total de combustível (em litros)" />
        </Row>
        <Button onClick={this.calculate}><Icon>refresh</Icon></Button>
        <h4 className="App-result">{this.state.result}</h4>
      </div>
    )
  }
}

export default App;
