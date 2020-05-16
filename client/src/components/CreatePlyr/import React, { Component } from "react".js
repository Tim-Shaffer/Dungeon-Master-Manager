import React, { Component } from "react";
import "../Playerview/playerstyle.css";
import Navbar from "../Navbar/Navbar";
import "./CreatePlyr.css";


class CreatePlyr extends Component {
    state = {
        characterName: "",
        classType: "",
        background: "",
        playerName: "",
        race: "",
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
       this.setState({
           characterName: event.target.value,
           classType: event.target.value,
           background: event.target.value,
           playerName: event.target.value,
           race: event.target.value,
           alignment: event.target.value,
           exp: event.target.value,
           strength: event.target.value,
           dexterity: event.target.value,
           constitution: event.target.value,
           intelligence: event.target.value,
           wisdom: event.target.value,
           charisma: event.target.value
       });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        
        const characterName = this.characterName.value;
        const classType = this.classType.value;
        const background = this.background.value;
        const playerName = this.playerName.value;
        const race = this.race.value;
        const alignment = this.alignment.value;
        const exp = this.exp.value;
        const strength = this.strength.value;
        const dexterity = this.dexterity.value;
        const constitution = this.constitution.value;
        const intelligence = this.intelligence.value;
        const wisdom = this.wisdom.value;
        const charisma = this.charisma.value;

        const plyr = {
            characterName: characterName,
            classType: classType,
            background: background,
            playerName: playerName,
            race: race,
            alignment: alignment,
            exp: exp,
            strength: strength,
            dexterity: dexterity,
            constituion: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma
        };

        const data = [...this.state.data, plyr];

        this.setState({
            data: data
        });
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

