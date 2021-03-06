import React, { Component } from "react";
import { List, ListItem } from "../List";
import IncrementButton from "../IncrementDecrementButton/IncrementButton";
import DecrementButton from "../IncrementDecrementButton/DecrementButton";
import { updateCharacter } from "../../utils/character_controller";
import "./style.css";
import UIfx from 'uifx';
import submitFX from './sounds/soundfx.mp3';
import SavedModal from '../SavedModal'; 

import socketIOClient from "socket.io-client";

const savedSound = new UIfx(submitFX)

class DMcard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        // endpoint: "localhost:3001", // need to update for Heroku (https://maws-dungeon-master-mgr.herokuapp.com)
        endpoint: `${process.env.REACT_APP_ENDPOINT}`,
        name: "",
        attributes: [],
        classType: "",
        background: "",
        race: "",
        alignment: "",
        Level: "",
        Experience: "",
        Strength: "",
        Dexterity: "",
        Constitution: "",
        Intelligence: "",
        Wisdom: "",
        Charisma: "",
        chracterId: ""    
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  };

  componentDidMount () {
    const name = this.props.character;
    const attributes = this.props.attributes;
    this.setState({name: name, attributes: attributes})

    this.setStateAttributes(attributes);
    
  }

  // componentDidUpdate(props) {
  //   if(props !== this.props) {
  //     const attributes = this.props.attributes;
  //     this.setStateAttributes(attributes);
  //   }
  // }


  setStateAttributes (attributes) {

    let classType = "",
      background = "",
      race =  "",
      alignment = "",
      Level = "",
      Experience = "",
      Strength = "",
      Dexterity = "",
      Constitution = "",
      Intelligence = "",
      Wisdom = "",
      Charisma = "";
    
    // refactored to only use a single setState method instead of the multiple calls
    // for (let i=0; i < attributes.length; i++) {
    //   if (attributes[i].attrName === "Class" ) { this.setState({classType: attributes[i].attrValue}) }  
    //   else if (attributes[i].attrName === "Background") {this.setState({background: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Race") {this.setState({race: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Alignment") {this.setState({alignment: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Level") {this.setState({Level: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Experience") {this.setState({Experience: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Strength") {this.setState({Strength: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Dexterity") {this.setState({Dexterity: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Constitution") {this.setState({Constitution: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Intelligence") {this.setState({Intelligence: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Wisdom") {this.setState({Wisdom: attributes[i].attrValue}) } 
    //   else if (attributes[i].attrName === "Charisma") {this.setState({Charisma: attributes[i].attrValue}) } 
    // }

    for (let i=0; i < attributes.length; i++) {
      if (attributes[i].attrName === "Class" ) { classType = attributes[i].attrValue }  
      else if (attributes[i].attrName === "Background") { background = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Race") { race = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Alignment") { alignment = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Level") { Level = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Experience") { Experience = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Strength") { Strength = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Dexterity") { Dexterity = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Constitution") { Constitution = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Intelligence") { Intelligence = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Wisdom") { Wisdom = attributes[i].attrValue } 
      else if (attributes[i].attrName === "Charisma") { Charisma = attributes[i].attrValue } 
    }

    this.setState({
      classType: classType,
      background: background,
      race: race,
      alignment: alignment,
      Level: Level,
      Experience: Experience,
      Strength: Strength,
      Dexterity: Dexterity,
      Constitution: Constitution,
      Intelligence: Intelligence,
      Wisdom: Wisdom,
      Charisma: Charisma
    }) 

  }

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // console.log(event.target);

    if(!isNaN(value)) {

      // console.log(value);
      // Set the state for the appropriate input field
      this.setState({
        [name]: value
      });

    } else {
      this.setState({
        [name]: 0
      });
    }

  };

  handleFormSubmit = event => {
    event.preventDefault();

    const charData = {
      attributes: [
        {attrName: "Class", attrValue: this.state.classType}, 
        {attrName: "Background", attrValue: this.state.background}, 
        {attrName: "Race", attrValue: this.state.race},
        {attrName: "Alignment", attrValue: this.state.alignment}, 
        {attrName: "Level", attrValue: this.state.Level}, 
        {attrName: "Experience", attrValue: this.state.Experience}, 
        {attrName: "Strength", attrValue: this.state.Strength}, 
        {attrName: "Dexterity", attrValue: this.state.Dexterity}, 
        {attrName: "Constitution", attrValue: this.state.Constitution}, 
        {attrName: "Intelligence", attrValue: this.state.Intelligence}, 
        {attrName: "Wisdom", attrValue: this.state.Wisdom}, 
        {attrName: "Charisma", attrValue: this.state.Charisma} 
      ]
    }
    updateCharacter(this.props.id, charData) 
        .then(res => {
            savedSound.play();
            const socket = socketIOClient(this.state.endpoint);
            // console.log(res.data);
            socket.emit('characterUpdate', res.data);
        })
        .catch(err => console.log(err));
  };

  handleIncrement(attr, value) {

    this.setState({
      [attr]: parseInt(value)
    });
    
  }

  handleDecrement(attr, value) {
    
    this.setState({
      [attr]: parseInt(value)
    });

  }

  render() {
    return (
      <>
      {/* {this.state.players.length > 0 ? */}
        <div className="card-header"><h5 className="card-title">{this.state.name}</h5></div>
        <div className="card-body">
          {this.state.attributes.length > 0 ?
          <form>
            <List>
              {this.state.attributes.map((attribute, index) =>
                <div className="row" key={index}>
                  <div className="col">
                  <ListItem key={attribute.attrName}>
                    <div className="row">
                        <div className="col border border-dark rounded mb-0 bg-white text-dark">
                          <div className="row">
                            <div className="col-5">
                              <span className="attr-name">{attribute.attrName}:</span>
                            </div>
                              {!isNaN(attribute.attrValue) ? 
                              <>
                                <div className="col-2">
                                  <DecrementButton 
                                    key={attribute.attrName} 
                                    decattr={attribute.attrName}  
                                    handleDecrement={this.handleDecrement}
                                    currValue={attribute.attrName === "Level" ? parseInt(this.state.Level) : 
                                                      attribute.attrName === "Experience" ? parseInt(this.state.Experience) : 
                                                      attribute.attrName === "Strength" ? parseInt(this.state.Strength) : 
                                                      attribute.attrName === "Dexterity" ? parseInt(this.state.Dexterity) : 
                                                      attribute.attrName === "Constitution" ? parseInt(this.state.Constitution): 
                                                      attribute.attrName === "Intelligence" ? parseInt(this.state.Intelligence) : 
                                                      attribute.attrName === "Wisdom" ? parseInt(this.state.Wisdom) : 
                                                      attribute.attrName === "Charisma" ? parseInt(this.state.Charisma) : 
                                                      null}
                                  > 
                                  </DecrementButton>                  
                                </div>
                                

                                <div className="col">
                                <input key={attribute.attrName} 
                                      className="number"
                                       type="text"
                                       name={attribute.attrName}
                                       onChange={this.handleInputChange.bind(this)}
                                       value={attribute.attrName === "Level" ? this.state.Level : 
                                                      attribute.attrName === "Experience" ? this.state.Experience : 
                                                      attribute.attrName === "Strength" ? this.state.Strength : 
                                                      attribute.attrName === "Dexterity" ? this.state.Dexterity : 
                                                      attribute.attrName === "Constitution" ? this.state.Constitution: 
                                                      attribute.attrName === "Intelligence" ? this.state.Intelligence : 
                                                      attribute.attrName === "Wisdom" ? this.state.Wisdom : 
                                                      attribute.attrName === "Charisma" ? this.state.Charisma : 
                                                      null}
                                       />
                                  
                                </div>

                                
                                <div className="col-2">
                                  <IncrementButton key={attribute.attrName}
                                    incattr={attribute.attrName}  
                                    handleIncrement={this.handleIncrement}
                                    currValue={attribute.attrName === "Level" ? parseInt(this.state.Level) : 
                                                      attribute.attrName === "Experience" ? parseInt(this.state.Experience) : 
                                                      attribute.attrName === "Strength" ? parseInt(this.state.Strength) : 
                                                      attribute.attrName === "Dexterity" ? parseInt(this.state.Dexterity) : 
                                                      attribute.attrName === "Constitution" ? parseInt(this.state.Constitution): 
                                                      attribute.attrName === "Intelligence" ? parseInt(this.state.Intelligence) : 
                                                      attribute.attrName === "Wisdom" ? parseInt(this.state.Wisdom) : 
                                                      attribute.attrName === "Charisma" ? parseInt(this.state.Charisma) : 
                                                      null}
                                  > 
                                  </IncrementButton>
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
            </form>
            :
            <div>No Attributes</div>
            }

            <div className="butt">
                <button className="btn btn-block playerbttn border border-dark" id="playerbttn" 
                data-toggle="modal" 
                data-target={"#saved" + this.state.name.split(' ').join('')} 
                onClick={this.handleFormSubmit.bind(this)}
                >
                  Save
                </button>
            </div>
            <SavedModal name={this.state.name}></SavedModal>
        </div>
      </>
    );
  }

}

export default DMcard;