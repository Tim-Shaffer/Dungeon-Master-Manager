import React, { Component } from "react";
import "./style.css";

class AddPlayer extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    // const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="container-fluid" id="body">
        <br />
        <br />
        <br />
        <div className="row justify-content-center" id="card">
          <div className="col-4">
            <div className="card border border-dark">
              <div className="card-header" id="card-title">
                Create New Campaign
                                    </div>
              <div className="card-body create-campaign">
                <h5 className="card-title">
                  <label htmlFor="name" id="card-title">Campaign Name: </label>
                  <input
                    value={this.state.campaign}
                    id="name"
                    name="characterName"
                    onChange={this.handleInputChange}
                    type="text"
                  />
                </h5>



                <div className="dropdown" onClick={this.toggleOpen}>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    Add Character
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#nogo">
                      Player 1
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 2
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 3
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 4
                    </a>
                  </div>
                </div>

                <br></br>

                <div className="dropdown" onClick={this.toggleOpen}>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    Add Character
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#nogo">
                      Player 1
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 2
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 3
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 4
                    </a>
                  </div>
                </div>

                <br></br>

                <div className="dropdown" onClick={this.toggleOpen}>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    Add Character
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#nogo">
                      Player 1
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 2
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 3
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 4
                    </a>
                  </div>
                </div>


                <br></br>

                <div className="dropdown" onClick={this.toggleOpen}>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    Add Character
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#nogo">
                      Player 1
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 2
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 3
                    </a>
                    <a className="dropdown-item" href="#nogo">
                      Player 4
                    </a>
                  </div>
                </div>









              </div>
            </div>
              <button className="btn btn-primary btn-block playerbttn border border-dark" id="DMbttn" onClick={this.handleFormSubmit} >
                Submit
              </button>
          </div>
        </div>
      </div>
    );
  }

}


export default AddPlayer;
