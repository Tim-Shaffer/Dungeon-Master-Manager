import React, { Component } from "react";
import "./CreatePlyr.css";

class CreatePlyr extends Component {
    state = {
        characterName: "",
        classType: "",
        background: "",
        playerName: "",
        race: "" ,
        alignment: "",
        exp: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form className="form">
                <input 
                value={this.state.characterName}
                name="characterName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Character Name"
                />
                <input
                value={this.state.class}
                name="classType"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Class"
                />
                <input
                value={this.state.background}
                name="background"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Background"
                />
                <input 
                value={this.state.playerName}
                name="playerName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Player Name"
                />
                <input
                value={this.state.race}
                name="race"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Race"
                />
                <input
                value={this.state.alignment}
                name="alignment"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Alignment"
                />
                <input
                value={this.state.exp}
                name="exp"
                onChange={this.handleInputChange}
                type="text"
                placeholder="EXP"
                />
                <input
                value={this.state.strength}
                name="strength"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Strength"
                />
                <input 
                value={this.state.dexterity}
                name="dexterity"
                onChange={this.handleInputChange};
                type="text"
                placeholder="Dexterity"
                />
                <input
                value={this.state.constitution}
                name="constitution"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Constitution"
                />
                <input
                value={this.state.intelligence}
                name="intelligence"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Intelligence"
                />
                <input
                value={this.state.wisdom}
                name="wisdom"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Wisdom"
                />
                <input
                value={this.state.charisma}
                name="charisma"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Charisma"
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
        );
    }
}

export default CreatePlyr;