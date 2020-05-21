import React, { Component } from 'react';
import "./incDec.css";

class IncrementButton extends Component {

  increaseItem = attr => {

    let value = this.props.currValue + 1
    this.props.handleIncrement(attr, value);
    
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-number incbutt" id={this.props.incattr} data-type="plus" 
                      data-field={this.props.incattr} onClick={() => this.increaseItem(this.props.incattr)}>
                <span className="glyphicon glyphicon-plus" id="symbol">+</span>
              </button>
          </span>
        </div>
      </div>
    );
  }
}

export default IncrementButton;