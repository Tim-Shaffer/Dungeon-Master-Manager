import React, { Component } from "react";
import { createCharacter } from "../../utils/character_controller";
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
        experience: 0,
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
                {attrName: "Class", attrValue: this.state.class}, 
                {attrName: "Background", attrValue: this.state.background}, 
                {attrName: "Race", attrValue: this.state.race},
                {attrName: "Alignment", attrValue: this.state.alignment}, 
                {attrName: "Level", attrValue: this.state.level}, 
                {attrName: "Experience", attrValue: this.state.experience}, 
                {attrName: "Strength", attrValue: this.state.strength}, 
                {attrName: "Dexterity", attrValue: this.state.dexterity}, 
                {attrName: "Constitution", attrValue: this.state.constitution}, 
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
                                    <div className="card-body create-character">
                                        <h5 className="card-title">
                                        <label htmlFor="name" id="lablename">Name: </label>
                                        <input
                                        value={this.state.characterName}
                                        id="name"
                                        name="characterName"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </h5>

                                        <p className="card-text">
                                        <label htmlFor="class" id="lablename">Class: </label>
                                        <input
                                        value={this.state.class}
                                        name="class"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="background" id="lablename">Background: </label>
                                        <input
                                        value={this.state.background}
                                        name="background"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="race" id="lablename">Race: </label>
                                        <input
                                        value={this.state.race}
                                        name="race"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="alignment" id="lablename">Alignment: </label>
                                        <input
                                        value={this.state.alignment}
                                        name="alignment"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="level" id="lablename">Level: </label>
                                        <input
                                        value={this.state.level}
                                        name="level"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>
                                      
                                        <p className="card-text">
                                        <label htmlFor="experience" id="lablename">Experience: </label>
                                        <input
                                        value={this.state.experience}
                                        name="experience"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />                                       
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="strength" id="lablename">Strength: </label>
                                        <input
                                        value={this.state.strength}
                                        name="strength"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="dexterity" id="lablename">Dexterity: </label>
                                        <input
                                        value={this.state.dexterity}
                                        name="dexterity"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="constitution" id="lablename">Constitution: </label>
                                        <input
                                        value={this.state.constitution}
                                        name="constitution"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="intelligence" id="lablename">Intelligence: </label>
                                        <input
                                        value={this.state.intelligence}
                                        name="intelligence"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="wisdom" id="lablename">Wisdom:</label>
                                        <input
                                        value={this.state.wisdom}
                                        name="wisdom"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>

                                        <p className="card-text">
                                        <label htmlFor="charisma" id="lablename">Charisma: </label>
                                        <input
                                        value={this.state.charisma}
                                        name="charisma"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        />
                                        </p>
                                    </div>                    
                                     
                                    <button onClick={this.handleFormSubmit} disabled={!(this.state.characterName)}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              );
    }
}

export default CreatePlyr;

