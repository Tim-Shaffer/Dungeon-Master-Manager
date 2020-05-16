import React, { Component } from "react";
// import "./style.css";

class AddPlayer extends Component {

    state = {
        isOpen: false
      };
    
      toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    
      render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
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
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
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
        );
      }
    }

}

export default AddPlayer;
