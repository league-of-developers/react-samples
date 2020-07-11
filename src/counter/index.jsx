import React, { Component } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Row } from "../components/Row";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue = (e) => {
    this.setState({ value: this.state.value + 1 });
  };

  decrementValue = (e) => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <Container>
        
        <Row>Valor atual: {this.state.value}</Row>
        <Row>
          <Button onClick={this.incrementValue} label="+" color="primary" />
          <Button onClick={this.decrementValue} label="-" color="danger"/>
        </Row>
      </Container>
    );
  }
}

export default Counter;
