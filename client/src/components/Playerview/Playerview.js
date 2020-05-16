import React, { Component } from "react";
import "./playerstyle.css";
import PlayerCard from "../PlayerCard/Playercard";
import { findCharacter } from "../../controllers/character_controller";
import CreatePlyr from "../CreatePlyr/CreatePlyr";

class Playerview extends Component {

        state = {
           userName: "",
           characters: [],
           showCreate: false
    };

    componentDidMount() {
        //-- I know I am executing this function!
        const user = this.props.user;

        findCharacter(user.id)
        .then(res => {
            let charArray = [];
            for (let i=0; i < res.data.length; i++) {
                charArray.push({
                    name: res.data[i].name,
                    attributes: res.data[i].attributes   
                })
            }
            this.setState({ characters: charArray, userName: user });
        })
        .catch(err => console.log(err));
    
    };

    createCharacter(e){
        e.preventDefault();
        this.setState({ showCreate: true})
    };

    handleSubmit(charData) {
        const charArray = this.state.characters;
        charArray.push(charData);

        this.setState({ showCreate: false, characters: charArray});
    }

    render() {

        const userName = this.props.user.name;
        const user = this.props.user;
    
        return (
        
            <div>
            <div className="container-fluid" id="body">
                <div className="row">
                    {this.state.characters.length === 0 && !this.state.showCreate ?
                         
                            <div className="col-12" id="campaign">
                                <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark" onClick={this.createCharacter.bind(this)}>Create Character</button>
                            </div>
                    :
                    null
                    }

                </div>
                <br/>

                {this.state.characters.length > 0 && !this.state.showCreate ?
                    <div className={this.state.characters.length === 1 ? "row justify-content-center" : "row"}>
                        {this.state.characters.length !== 2 ?
                            this.state.characters.map(character => 
                            <div key={character.name} className={this.state.characters.length % 4 === 0 ? "col-3" : "col-4"}>
                                <div className="card border border-dark">
                                    <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                    <div className="butt">
                                        {/* <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a> */}
                                        <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                    </div>
                                </div>
                            </div>)
                        :
                            this.state.characters.map(character =>
                                 
                                <div className="col-6">
                                    <div className="card border border-dark">
                                        <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                        <div className="butt">
                                            {/* <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a> */}
                                            <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                        </div>
                                    </div>
                                </div>)
                        }                   

                    </div>
                :
                    null
                }

                { this.state.showCreate ? 
                    <CreatePlyr userName={userName} user={user} handleSubmit={this.handleSubmit.bind(this)}/>
                :
                null
                }

                </div>
            </div>
        
        )
    }

}

export default Playerview;