import React, { Component } from "react";
import "./playerstyle.css";
import PlayerCard from "../PlayerCard/Playercard";
import { findCharacter } from "../../utils/character_controller";
import CreatePlyr from "../CreatePlyr/CreatePlyr";
import { deleteCharacter } from "../../utils/character_controller";
import Music from "../Music/Music";

class Playerview extends Component {

        state = {
           user: "",
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
                    _id: res.data[i]._id,
                    name: res.data[i].name,
                    attributes: res.data[i].attributes   
                })
            }
            this.setState({ characters: charArray, user: user });
        })
        .catch(err => console.log(err));
    
    };

    createCharacter(e){
        e.preventDefault();
        this.setState({ showCreate: true})
    };

    delChar(id){

        console.log(this.state);
        console.log(id);

        deleteCharacter(id)
        .then(res => {
            // console.log(res);
            let charArray = [];
            if (res.data.length !== 1){
            for (let i=0; i < res.data.length; i++) {
                charArray.push({
                    _id: res.data[i]._id,
                    name: res.data[i].name,
                    attributes: res.data[i].attributes,
                    
                })
                
            }}
            
            this.setState({ characters: charArray });
        })
        .catch(err => {
            console.log(err);
        })
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
            {/* <Music /> */}
                    {this.state.characters.length === 0 && !this.state.showCreate ?
                         
                            <div className="col-12" id="campaign">
                                <button type="button" className="btn btn-lg playerbttn border border-dark" onClick={this.createCharacter.bind(this)}>Create Character</button>
                            </div>
                    :
                    null
                    }

                </div>
                <br/>

                {this.state.characters.length > 0 && !this.state.showCreate ?
                    <>
                    <div className={this.state.characters.length === 1 ? "row justify-content-center" : "row"}>
                        {this.state.characters.length !== 2 ?
                            this.state.characters.map(character => 
                            <div key={character.name} className={this.state.characters.length % 4 === 0 ? "col-3" : "col-4"}>
                                <div className="card border border-dark">
                                    <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                    <div className="butt">
                                        {/* <a href="#" className="btn btn-block playerbttn border border-dark" id="playerbttn">Edit</a> */}
                                        {/* <button className="btn btn-block playerbttn border border-dark" id={character._id} onClick={() => this.delChar(character._id)}>Remove</button> */}
                                    </div>
                                </div>
                            </div>)
                        :
                            this.state.characters.map(character =>
                                
                                <div className="col-6">
                                    <div className="card border border-dark">
                                        <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                        <div className="butt">
                                            {/* <a href="#" className="btn btn-block playerbttn border border-dark" id="playerbttn">Edit</a> */}
                                            {/* <a href="#" className="btn btn-block playerbttn border border-dark" id={character._id} onClick={() => this.delChar(character._id)}>Remove</a> */}
                                        </div>
                                    </div>
                                </div>)
                        }                   
                    
                    </div>
                    
                    <Music />
                    </>
                    
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