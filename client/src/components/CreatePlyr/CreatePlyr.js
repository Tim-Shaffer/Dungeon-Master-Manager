import React, { Component } from "react";
import { createCharacter } from "../../controllers/character_controller";
import "../Playerview/playerstyle.css";
import "./CreatePlyr.css";


class CreatePlyr extends Component {
    state = {
        playerName: "",
        characterName: "",
        classType: "",
        background: "",
        race: "",
        alignment: "",
        exp: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        level: 0,
        userId: ""
    };


    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });
      };


    handleFormSubmit = event => {
        event.preventDefault();
        const user = this.props.user;
        const userId = user.id;
        const plyr = {
            name: this.state.characterName,
            attributes: [
                {attrName: "Class", attrValue: this.state.classType}, 
                {attrName: "Level", attrValue: this.state.level}, 
                {attrName: "Background", attrValue: this.state.background}, 
                {attrName: "Race", attrValue: this.state.race},
                {attrName: "Alignment", attrValue: this.state.alignment}, 
                {attrName: "Experience", attrValue: this.state.exp}, 
                {attrName: "Strength", attrValue: this.state.strength}, 
                {attrName: "Dexterity", attrValue: this.state.dexterity}, 
                {attrName: "Constitution", attrValue: this.state.constituion}, 
                {attrName: "Intelligence", attrValue: this.state.intelligence}, 
                {attrName: "Wisdom", attrValue: this.state.wisdom}, 
                {attrName: "Charisma", attrValue: this.state.charisma}  
            ]
        };

        createCharacter(userId, plyr)
        .then(res =>  {
            this.props.handleSubmit(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    render() {
        return (        
                <div>
                    <div className="container-fluid" id="body">
                        <br/>
                        <br/>
                        <br/>
                        <div className="row justify-content-center" id="card">
                            <div className="col-4">
                                <div className="card border border-dark">
                                    <div className="card-header">
                                    Create New Character for {this.props.userName.split(" ")[0]}
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">
                                    <input
                                    value={this.state.characterName}
                                    id="name"
                                    name="characterName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Character Name"
                                    />
                                    </h5>
                                    <p className="card-text">
                                    <input
                                    value={this.state.class}
                                    name="classType"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Class"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                     value={this.state.background}
                                     name="background"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Background"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                     value={this.state.race}
                                        name="race"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Race"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.alignment}
                                    name="alignment"
                                    onChange={this.handleInputChange}
                                    type="text"
                                     placeholder="Alignment"
                                    />
                                     </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.exp}
                                    name="exp"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="EXP"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.strength}
                                    name="strength"
                                    onChange={this.handleInputChange}
                                     type="text"
                                    placeholder="Strength"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.dexterity}
                                    name="dexterity"
                                     onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Dexterity"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.constitution}
                                    name="constitution"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Constitution"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.intelligence}
                                    name="intelligence"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Intelligence"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.wisdom}
                                    name="wisdom"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Wisdom"
                                    />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.charisma}
                                    name="charisma"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Charisma"
                                     />
                                    </p>
                                    <p className="card-text">
                                    <input
                                    value={this.state.level}
                                    name="level"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Level"
                                     />
                                    </p>
                                    </div>                    
                                        <a href="/dashboard">
                                    <button onClick={this.handleFormSubmit} >
                                        Submit
                                        </button>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              );
    }
}

export default CreatePlyr;

