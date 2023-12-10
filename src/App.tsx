import React from 'react'
import S from "./styled";

function App() {
  const [bill, setBill] = React.useState(0.0);
  const [, setIsTrustworthy] = React.useState(true);
  const [liters, setLiters] = React.useState(0.0);
  const [price, setPrice] = React.useState(0.0);
  const [result, setResult] = React.useState('');

  const updatePrice = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = target.value
      .split("")
      .filter(s => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = parseFloat(onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2));
    setPrice(digitsFloat);
  }
  
  const updateBill = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
    setBill(currentTarget.valueAsNumber);
  }
  const updateLiters = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(currentTarget.valueAsNumber);
  }
  
  React.useEffect(() => {
    const result = liters - (bill / price)
    if (result > 0) {
      setResult(`Abastecida com ${result.toFixed(2)} litros a mais`);
    } else if (result < 0) {
      setIsTrustworthy(false);
      setResult(`Abastecida com ${Math.abs(result).toFixed(2)} litros a menos`);
    } else {
      setResult('O valor da bomba está OK');
    }
  }, [bill, price, liters]);
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
    <S.AppContainer>
      <S.AppHeader>
        <h4>Descubra se o valor na bomba está de acordo</h4>
      </S.AppHeader>
      <div>
        <S.FieldSeparator>
          <label htmlFor="bill">Total a ser pago</label>
          <input type="number" id="bill" value={Number(bill)} onChange={updateBill} />
        </S.FieldSeparator>
        <S.FieldSeparator>
          <label htmlFor="price">Preço por litro</label>
          <input type="text" id="price" value={price} onChange={updatePrice} />
        </S.FieldSeparator>
        <S.FieldSeparator>
          <label htmlFor="liters">Total de combustível (em litros)</label>
          <input type="number" id="liters" onChange={updateLiters} />
        </S.FieldSeparator>
      </div>
      <S.AppResult>{result}</S.AppResult>
    </S.AppContainer>
  )
}

export default App
