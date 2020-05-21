import React, { Component } from 'react';
import "./incDec.css";

class DecrementButton extends Component {

  decreaseItem = attr => {
    // console.log(attr); 
    console.log(this.props);
    let value = this.props.currValue - 1
    // console.log(value);
    this.props.handleDecrement(attr, value);
  }

  render() {
    // this.currValues(this.props.decattr, this.props.attrValue);

    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-danger btn-number decbutt" id={this.props.decattr} data-type="minus" 
                      data-field={this.props.decattr} onClick={() => this.decreaseItem(this.props.decattr)}>
                <span className="glyphicon glyphicon-minus" id="symbol">-</span>
              </button>
          </span>
        </div>
        
        {/* <button className="incDecButt" onClick={this.decreaseItem}>-</button> */}
      </div>
    );
  }
}

export default DecrementButton;