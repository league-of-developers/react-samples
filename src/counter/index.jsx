import React, { Component } from "react";
import { Button } from '../components/button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    incrementValue = (e) => {
        this.setState({value: this.state.value + 1});
    }

    decrementValue = (e) => {
        this.setState({value: this.state.value - 1});
    }
  
    render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <Button onClick={this.incrementValue}
                label="+"/>
        <Button
          onClick={this.decrementValue}
          label="-"
        />
      </div>
    );
  }
}

export default Counter;
