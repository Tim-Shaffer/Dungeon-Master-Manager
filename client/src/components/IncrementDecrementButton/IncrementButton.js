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

  increaseItem = attr => {
    // console.log(attr); 
    console.log(this.props);
    let value = this.props.currValue + 1
    // console.log(value);
    this.props.handleIncrement(attr, value);
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-success btn-number incbutt" id={this.props.incattr} data-type="plus" 
                      data-field={this.props.incattr} onClick={() => this.increaseItem(this.props.incattr)}>
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