import React from "react";
import { Button, Icon, Input, Row } from "react-materialize";
import "./App.css";

interface IGasStation {
  name: string;
}

interface IState {
  fuel: string;
  price: number;
  bill: number;
  blacklist: IGasStation[];
  gasStationName: string;
  isTrustworthy: boolean;
  liters: number;
  result: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      bill: 0,
      blacklist: [],
      fuel: "",
      gasStationName: "",
      isTrustworthy: true,
      liters: 0,
      price: 0,
      result: "",
    };

    this.updateBill = this.updateBill.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateLiters = this.updateLiters.bind(this);
    this.calculate = this.calculate.bind(this);
    this.addBlacklist = this.addBlacklist.bind(this);
  }

  public render(): JSX.Element {
    // const btnAddBlacklist = this.state.isTrustworthy
    //   ? <Modal
    //     id="modalAddBlacklist"
    //     trigger={<Button>Adicionar à lista negra</Button>}
    //     actions={<Button onClick={this.addBlacklist}>Adicionar</Button>}>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua.</p>
    //   </Modal>
    //   : null;
    return (
      <div className="App">
        <div className="App-header">
          <h4>Descubra se o valor na bomba está de acordo</h4>
        </div>
        <Row>
          <Input type="number" value={this.state.price}
            onChange={this.updatePrice} s={6} label="Preço por litro" />
          <Input type="number" value={this.state.bill}
            onChange={this.updateBill} s={6} label="Total a ser pago" />
          <Input type="number" value={this.state.liters}
            onChange={this.updateLiters} s={12} label="Total de combustível (em litros)" />
        </Row>
        <Button onClick={this.calculate}><Icon>refresh</Icon></Button>
        <h4 className="App-result">{this.state.result}</h4>
        {/* {btnAddBlacklist} */}
      </div>
    );
  }

  private updatePrice(event: any) {
    this.setState({ price: event.target.value });
  }

  private updateBill(event: any) {
    this.setState({ bill: event.target.value });
  }

  private updateLiters(event: any) {
    this.setState({ liters: event.target.value });
  }

  private calculate(event: any) {
    const { bill, price, liters } = this.state;
    const result = liters - (bill / price);
    if (result > 0) {
      this.setState({ result: `Abastecida com ${result.toFixed(2)} litros a mais` });
    } else if (result < 0) {
      this.setState({
        isTrustworthy: false,
        result: `Abastecida com ${Math.abs(result).toFixed(2)} litros a menos`,
      });
    } else {
      this.setState({ result: `O valor da bomba está OK` });
    }
  }

  private addBlacklist() {
    navigator.geolocation.getCurrentPosition((result) => {
      const { longitude, latitude } = result.coords;
      const name = this.state.gasStationName;
      // const modalAddBlacklist = $('#modalAddBlacklist') as any;
      // modalAddBlacklist.modal('close')
      const gasStation = { name, longitude, latitude };
      this.setState({ blacklist: [...this.state.blacklist, gasStation] });
      window.console.log("gasStation", gasStation);
    });
  }
}

export default App;
