import React, { Component } from 'react';
import "./incDec.css";

class IncrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-success btn-number" id="incbutt" data-type="plus" data-field="" onClick={this.IncrementItem}>
                <span className="glyphicon glyphicon-plus" id="symbol">+</span>
              </button>
          </span>
        </div>
        
        {/* <button className="incDecButt" onClick={this.IncrementItem}>+</button> */}
      </div>
    );
  }
}

export default IncrementButton;