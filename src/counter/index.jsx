import React, { Component } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Row from '../components/Row';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  decrementValue = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Row>
          <p>
            Valor atual:
            {' '}
            {value}
          </p>
        </Row>
        <Row>
          <Button onClick={this.incrementValue} label="+" color="primary" />
          <Button onClick={this.decrementValue} label="-" color="danger" />
        </Row>
      </Container>
    );
  }
}

export default Counter;
