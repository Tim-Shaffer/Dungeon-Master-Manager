import React, { Component } from 'react';
import "./style.css";
import D4 from '../../assets/images/D4.png'; 
import D6 from '../../assets/images/D6.png'; 
import D8 from '../../assets/images/D8.png'; 
import D10 from '../../assets/images/D10.png'; 
import D12 from '../../assets/images/D12.png'; 
import D20 from '../../assets/images/D20.png'; 

class DiceRoll extends Component {
  
  state = {
    isChecked: false,
    roll: ""

  }

  rollD4() {
    let currRoll = Math.floor(Math.random() * 4) + 1;
    this.setState({ roll: currRoll });

  };

  rollD6() {
    let currRoll = Math.floor(Math.random() * 6) + 1;
    this.setState({ roll: currRoll });

  };

  rollD8() {
    let currRoll = Math.floor(Math.random() * 8) + 1;
    this.setState({ roll: currRoll });

  };

  rollD10() {
    let currRoll = Math.floor(Math.random() * 10) + 1;
    this.setState({ roll: currRoll });

  };

  rollD12() {
    let currRoll = Math.floor(Math.random() * 12) + 1;
    this.setState({ roll: currRoll });

  };

  rollD20() {
    let currRoll = Math.floor(Math.random() * 20) + 1;
    this.setState({ roll: currRoll });

  };


  render() {

    return (

    <div id="rollDice" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button> 
                </div>
                <div className="modal-body">
                    <img className="dice-image" src={D4} alt="D4" onClick={this.rollD4.bind(this)}/>
                    <img className="dice-image" src={D6} alt="D6" onClick={this.rollD6.bind(this)}/>
                    <img className="dice-image" src={D8} alt="D8" onClick={this.rollD8.bind(this)}/>
                    <img className="dice-image" src={D10} alt="D10" onClick={this.rollD10.bind(this)}/>
                    <img className="dice-image" src={D12} alt="D12" onClick={this.rollD12.bind(this)}/>
                    <img className="dice-image" src={D20} alt="D20" onClick={this.rollD20.bind(this)}/>
                </div>
                <div className="modal-footer">{this.state.roll}</div>
            </div>
        </div>
    </div>

    )}

}

export default DiceRoll;