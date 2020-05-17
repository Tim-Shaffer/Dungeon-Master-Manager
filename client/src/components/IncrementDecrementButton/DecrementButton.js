import React, { Component } from 'react';
import "./incDec.css";

class DecrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-danger btn-number" id="decbutt" data-type="minus" data-field="" onClick={this.IncrementItem}>
                <span className="glyphicon glyphicon-minus" id="symbol">-</span>
              </button>
          </span>
        </div>
        
        {/* <button className="incDecButt" onClick={this.DecreaseItem}>-</button> */}
      </div>
    );
  }
}

export default DecrementButton;