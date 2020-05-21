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
    roll: "", 
    D4: "",
    D6: "",
    D8: "",
    D10: "",
    D12: "",
    D20: ""
  }

  rollD4() {
    let currRoll = Math.floor(Math.random() * 4) + 1;
    this.setState({ D4: currRoll });

  };

  rollD6() {
    let currRoll = Math.floor(Math.random() * 6) + 1;
    this.setState({ D6: currRoll });

  };

  rollD8() {
    let currRoll = Math.floor(Math.random() * 8) + 1;
    this.setState({ D8: currRoll });

  };

  rollD10() {
    let currRoll = Math.floor(Math.random() * 10) + 1;
    this.setState({ D10: currRoll });

  };

  rollD12() {
    let currRoll = Math.floor(Math.random() * 12) + 1;
    this.setState({ D12: currRoll });

  };

  rollD20() {
    let currRoll = Math.floor(Math.random() * 20) + 1;
    this.setState({ D20: currRoll });

  };

  resetRolls() {
    this.setState({D4: "", D6: "", D8: "", D10: "", D12: "", D20: ""})
  };


  render() {

    return (

    <div id="rollDice" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">Click the Die to roll 
                    <button type="button" className="close" data-dismiss="modal" onClick={() => this.resetRolls()}>&times;</button> 
                </div>
                <div className="modal-body">

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D4} alt="D4" onClick={this.rollD4.bind(this)}/>
                        </div>
                        <div className="col roll-text-black">{this.state.D4}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D6} alt="D6" onClick={this.rollD6.bind(this)}/>
                        </div>
                        <div className="col roll-text-red">{this.state.D6}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D8} alt="D8" onClick={this.rollD8.bind(this)}/>
                        </div>
                        <div className="col roll-text-black">{this.state.D8}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D10} alt="D10" onClick={this.rollD10.bind(this)}/>
                        </div>
                        <div className="col roll-text-red">{this.state.D10}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D12} alt="D12" onClick={this.rollD12.bind(this)}/>
                        </div>
                        <div className="col roll-text-black">{this.state.D12}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col border border-dark rounded mb-0 text-dark">
                      <div className="row">
                        <div className="col-5">
                          <img className="dice-image" src={D20} alt="D20" onClick={this.rollD20.bind(this)}/> 
                        </div>
                        <div className="col roll-text-red">{this.state.D20}</div>
                      </div>
                    </div>
                  </div>              
                    
                </div>

            </div>
        </div>
    </div>

    )}

}

export default DiceRoll;