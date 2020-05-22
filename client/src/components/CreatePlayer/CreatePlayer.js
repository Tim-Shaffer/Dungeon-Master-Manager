import React, { Component } from "react";
import { createCharacter } from "../../utils/character_controller";
import "../Playerview/playerstyle.css";
import "./CreatePlayer.css";
import UIfx from 'uifx'
import submitFX from './sounds/soundfx.mp3'

const createdSound = new UIfx(submitFX)

class CreatePlayer extends Component {

    constructor() {
        super();
        this.state = {
        playerName: "",
        name: "",
        class: "",
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
        level: 1,
        userId: "",
        fields: {},
        errors: {}
        };
    }

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        let fields = this.state.fields;
        fields[name] = value;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value,
          fields,
          errors: {}
        });

        if (name === "class" && value.toLowerCase() === "barbarian" ) {
            this.setState({ strength: 18, dexterity: 14, constitution: 14, intelligence: 8, wisdom: 12, charisma: 10 })    
        } else if (name === "class" && value.toLowerCase() === "bard" ) {
            this.setState({ strength: 9, dexterity: 15, constitution: 14, intelligence: 11, wisdom: 13, charisma: 17 })    
        } else if (name === "class" && value.toLowerCase() === "cleric" ) {
            this.setState({ strength: 15, dexterity: 9, constitution: 14, intelligence: 11, wisdom: 17, charisma: 13 })    
        } else if (name === "class" && value.toLowerCase() === "druid" ) {
            this.setState({ strength: 8, dexterity: 14, constitution: 14, intelligence: 11, wisdom: 16, charisma: 12 })    
        } else if (name === "class" && value.toLowerCase() === "fighter" ) {
            this.setState({ strength: 17, dexterity: 12, constitution: 15, intelligence: 10, wisdom: 13, charisma: 8 })    
        } else if (name === "class" && value.toLowerCase() === "monk" ) {
            this.setState({ strength: 13, dexterity: 17, constitution: 14, intelligence: 11, wisdom: 15, charisma: 9 })    
        } else if (name === "class" && value.toLowerCase() === "paladin" ) {
            this.setState({ strength: 17, dexterity: 8, constitution: 14, intelligence: 10, wisdom: 12, charisma: 14 })    
        } else if (name === "class" && value.toLowerCase() === "ranger" ) {
            this.setState({ strength: 12, dexterity: 17, constitution: 14, intelligence: 10, wisdom: 14, charisma: 8 })    
        } else if (name === "class" && value.toLowerCase() === "rogue" ) {
            this.setState({ strength: 8, dexterity: 17, constitution: 14, intelligence: 12, wisdom: 10, charisma: 14 })    
        } else if (name === "class" && value.toLowerCase() === "sorcerer" ) {
            this.setState({ strength: 14, dexterity: 11, constitution: 10, intelligence: 10, wisdom: 8, charisma: 20 })    
        } else if (name === "class" && value.toLowerCase() === "warlock" ) {
            this.setState({ strength: 10, dexterity: 12, constitution: 11, intelligence: 14, wisdom: 8, charisma: 20 })    
        } else if (name === "class" && value.toLowerCase() === "wizard" ) {
            this.setState({ strength: 8, dexterity: 10, constitution: 10, intelligence: 20, wisdom: 11, charisma: 16 })    
        } 

    };




    handleFormSubmit = event => {
        event.preventDefault();

        if (this.validateForm()) {
            const user = this.props.user;
            const userId = user.id;
            const plyr = {
                name: this.state.name,
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

            let fields = {};
            this.setState({fields: fields});

            createCharacter(userId, plyr)
            .then(res =>  {
                createdSound.play();
                this.props.handleSubmit(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        };
    };

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Character name is required.";
        }

        if (!fields["class"]) {
            formIsValid = false;
            errors["class"] = "Class is required.";
        }

        if (!fields["background"]) {
            formIsValid = false;
            errors["background"] = "Background is required.";
        }

        if (!fields["race"]) {
            formIsValid = false;
            errors["race"] = "Race is required.";
        }

        if (!fields["alignment"]) {
            formIsValid = false;
            errors["alignment"] = "Alignment is required.";
        }
    
        this.setState({
            errors: errors
        });

        return formIsValid;
    
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
                                        value={this.state.name}
                                        id="name"
                                        name="name"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        required
                                        />
                                        </h5>
                                        <div className="char-red-text">{this.state.errors.name}</div>

                                        <p className="card-text">
                                        <label htmlFor="class" id="lablename">Class: </label>
                                        <input
                                        value={this.state.class}
                                        name="class"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        required
                                        />
                                        </p>
                                        <div className="char-red-text">{this.state.errors.class}</div>

                                        <p className="card-text">
                                        <label htmlFor="background" id="lablename">Background: </label>
                                        <input
                                        value={this.state.background}
                                        name="background"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        required
                                        />
                                        </p>
                                        <div className="char-red-text">{this.state.errors.background}</div>

                                        <p className="card-text">
                                        <label htmlFor="race" id="lablename">Race: </label>
                                        <input
                                        value={this.state.race}
                                        name="race"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        required
                                        />
                                        </p>
                                        <div className="char-red-text">{this.state.errors.race}</div>

                                        <p className="card-text">
                                        <label htmlFor="alignment" id="lablename">Alignment: </label>
                                        <input
                                        value={this.state.alignment}
                                        name="alignment"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        required
                                        />
                                        </p>
                                        <div className="char-red-text">{this.state.errors.alignment}</div>

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
                                     
                                    <button onClick={this.handleFormSubmit} >
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

export default CreatePlayer;
