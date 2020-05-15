import React, { Component } from "react";
import "../Playerview/playerstyle.css";
import Navbar from "../Navbar/Navbar";
import "./CreatePlyr.css";
import { findUser } from "../../actions/authActions";


class CreatePlyr extends Component {
    state = {
            userName: "",
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

    // componentDidMount() {
    //     //-- I know I am executing this function!
    //     const user = this.props.user;
    //     console.log(JSON.stringify(user));
    
    //     // findUser(user.id);
    //     findUser(user.id).then(res => {
    //       this.setState({ userName: res.data.name});
    //     })
    //     .catch(err => console.log(err));
    
    // }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();


    }

    render() {
        return (          
                <div>
                        <Navbar />
                    <div className="container-fluid" id="body">
                        <br/>
                        <br/>
                        <br/>
                        <div className="row justify-content-center" id="card">
                            <div className="col-4">
                                <div className="card border border-dark">
                                    <div className="card-header">
                                    Player 1
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
                                    <button onClick={this.handleFormSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              );
    }
}

export default CreatePlyr;

