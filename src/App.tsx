import React from 'react'
import './App.css'

function App() {
  const [bill, setBill] = React.useState(0.0);
  const [, setIsTrustworthy] = React.useState(true);
  const [liters, setLiters] = React.useState(0.0);
  const [price, setPrice] = React.useState(0.0);
  const [result, setResult] = React.useState('');

  const updatePrice = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(currentTarget.valueAsNumber);
  }
  const updateBill = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
    setBill(currentTarget.valueAsNumber);
  }
  const updateLiters = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(currentTarget.valueAsNumber);
  }
  const calculate = () => {
    const result = liters - (bill / price)
    if (result > 0) {
      setResult(`Abastecida com ${result.toFixed(2)} litros a mais`);
    } else if (result < 0) {
      setIsTrustworthy(false);
      setResult(`Abastecida com ${Math.abs(result).toFixed(2)} litros a menos`);
    } else {
      setResult('O valor da bomba está OK');
    }
  }
  // const addBlacklist = () => {
  //   navigator.geolocation.getCurrentPosition((result) => {
  //     const { longitude, latitude } = result.coords
  //     const name = this.state.gasStationName
  //     const modalAddBlacklist = $('#modalAddBlacklist') as any;
  //     modalAddBlacklist.modal('close')
  //     const gasStation = { name, longitude, latitude }
  //     this.setState({blacklist: [...this.state.blacklist, gasStation]})
  //     window.console.log('gasStation', gasStation)
  //   });
  // }

  return (
    <div className="App">
      <div className="App-header">
        <h4>Descubra se o valor na bomba está de acordo</h4>
      </div>
      <div>
        <input type="number" value={price} onChange={updatePrice} placeholder="Preço por litro" />
        <input type="number" value={bill} onChange={updateBill} placeholder="Total a ser pago" />
        <input type="number" value={liters} onChange={updateLiters} placeholder="Total de combustível (em litros)" />
      </div>
      <button onClick={calculate}>Refresh</button>
      <h4 className="App-result">{result}</h4>
    </div>
  )
}

export default App
