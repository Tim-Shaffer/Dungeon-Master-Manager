import React, { Component } from "react";
import { List, ListItem } from "../List";
import IncrementButton from "../IncrementDecrementButton/IncrementButton";
import DecrementButton from "../IncrementDecrementButton/DecrementButton";

import "./style.css";

class DMcard extends Component {

  
    state = {
          name: "",
          attributes: []
          
    };

  componentDidMount () {
    const attributes = this.props.attributes;
    console.log("props" + JSON.stringify(this.props.attributes));
    console.log("attr" + JSON.stringify(attributes));
    const name = this.props.character;
    this.setState({name: name, attributes: attributes})
    console.log("STATE" + JSON.stringify(this.state));
    console.log(this.state.attributes.indexOf("Level"));
  }
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
      {/* {this.state.players.length > 0 ? */}
        <div className="card-header"><h5 className="card-title">{this.state.name}</h5></div>
        <div className="card-body">
          {this.props.attributes.length > 0 ?
            <List>
              {this.props.attributes.map(attribute =>
                <div className="row">
                  <div className="col">
                  <ListItem>
                    <div className="row">
                        <div className="col border border-dark rounded mb-0 bg-white text-dark">
                          <div className="row">
                            <div className="col-5">
                              <span className="attr-name">{attribute.attrName}:</span>
                            </div>
                              {!isNaN(attribute.attrValue) ? 
                              <>
                                <div className="col-2">
                                  <DecrementButton></DecrementButton>                  
                                </div>
                                

                                <div className="col">
                                <input id="number"
                                       type="text"
                                       name={attribute.attrName}
                                       onChange={this.handleInputChange.bind(this)}
                                       defaultValue={this.state.attributes.indexOf(attribute.attrName) !== -1 ? this.state.attributes[this.state.attributes.indexOf(attribute.attrName)].attrValue : null}
                                       />
                                  
                                </div>

                                
                                <div className="col-2">
                                  <IncrementButton></IncrementButton>
                                </div>
                            </>
                            : 
                                <div className="col">
                                <span className="attr-value">{attribute.attrValue}</span>
                                  
                                </div>
                            }
                            

                          </div>
                          
                          
                        </div>
                      
                    </div>
                  </ListItem>
                  </div>
                </div>
                
                // <div className="row">
                //   <div className="col">
                //     <ListItem >
                //       <div className="row">
                //         <IncrementButton></IncrementButton><span className="attr-name">{attribute.attrName}:</span>  <span className="attr-value">{attribute.attrValue}</span> <DecrementButton></DecrementButton>
                //       </div>
                //     </ListItem>
                //   </div>
                // </div>
                )}
            </List>
            :
            <div>No Attributes</div>
            }
        </div>
      </>
    );
  }

}

export default DMcard;
