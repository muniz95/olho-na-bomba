import * as React from 'react';
import { Button, Icon, Input, Row } from 'react-materialize'
import './App.css';

interface IAppState {
  fuel: string,
  price: number,
  bill: number,
  liters: number,
  result: string
}

class App extends React.Component<{}, IAppState> {
  public state: any

  constructor(props: any){
    super(props)

    this.state = {
      bill: undefined,
      fuel: undefined,
      liters: undefined,
      price: undefined,
      result: ''
    }
    
    this.updateBill = this.updateBill.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateLiters = this.updateLiters.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  public render() {
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
  
  private updatePrice(event: any) {
    this.setState({price: event.target.value});
  }

  private updateBill(event: any) {
    this.setState({bill: event.target.value});
  }

  private updateLiters(event: any) {
    this.setState({liters: event.target.value});
  }

  private calculate(event: any) {
    const bill = this.state.bill
    const price = this.state.price
    const liters = this.state.liters
    const result = liters - (bill / price)
    if (result > 0) {
      this.setState({ result: `Abastecida com ${result.toFixed(2)} litros a mais`})
    } else if (result < 0) {
      this.setState({result: `Abastecida com ${Math.abs(result).toFixed(2)} litros a menos`})
    } else {
      this.setState({result: `O valor da bomba está OK`})
    }
  }
}

export default App;
