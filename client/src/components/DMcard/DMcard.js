import React, { Component } from "react";
import { List, ListItem } from "../List";
import IncrementButton from "../IncrementDecrementButton/IncrementButton";
import DecrementButton from "../IncrementDecrementButton/DecrementButton";

import "./style.css";

class DMcard extends Component {

  
    state = {
        name: "",
        attributes: [],
        classType: "",
        background: "",
        race: "",
        alignment: "",
        level: "",
        experience: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: "",
        chracterId: ""
          
    };

  componentDidMount () {
    const attributes = this.props.attributes;
    this.setState({name: name, attributes: attributes})
    // console.log("props" + JSON.stringify(this.props.attributes));
    // console.log("attr" + JSON.stringify(attributes));
    const name = this.props.character;
    for (let i=0; i < attributes.length; i++) {
      if (attributes[i].attrName === "Class" ) { this.setState({classType: attributes[i].attrValue}) }  
      else if (attributes[i].attrName === "Background") {this.setState({background: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Race") {this.setState({race: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Alignment") {this.setState({alignment: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Level") {this.setState({level: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Experience") {this.setState({experience: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Strength") {this.setState({strength: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Dexterity") {this.setState({dexterity: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Constitution") {this.setState({constitution: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Intelligence") {this.setState({intelligence: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Wisdom") {this.setState({wisdom: attributes[i].attrValue}) } 
      else if (attributes[i].attrName === "Charisma") {this.setState({charisma: attributes[i].attrValue}) } 
    }
    
    // console.log("STATE" + JSON.stringify(this.state));
    // console.log(this.state.attributes.indexOf("Level"));
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
                                       defaultValue={attribute.attrName === "Level" ? this.state.level : 
                                                      attribute.attrName === "Experience" ? this.state.experience : 
                                                      attribute.attrName === "Strength" ? this.state.strength : 
                                                      attribute.attrName === "Dexterity" ? this.state.dexterity : 
                                                      attribute.attrName === "Constitution" ? this.state.constitution: 
                                                      attribute.attrName === "Intelligence" ? this.state.intelligence : 
                                                      attribute.attrName === "Wisdom" ? this.state.wisdom : 
                                                      attribute.attrName === "Charisma" ? this.state.charisma : 
                                                      null}
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
