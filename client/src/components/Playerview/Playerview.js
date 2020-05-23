import React, { Component } from "react";
import "./playerstyle.css";
import PlayerCard from "../PlayerCard/Playercard";
import { findCharacter } from "../../utils/character_controller";
import CreatePlayer from "../CreatePlayer/CreatePlayer";
import { deleteCharacter } from "../../utils/character_controller";
import Music from "../Music/Music";
import Footer from "../Footer/Footer";

import socketIOClient from "socket.io-client";

class Playerview extends Component {
    
    state = {
        endpoint: "localhost:3001",
        updateCount: 0,
        user: "",
        characters: [],
        showCreate: false
    };

    componentDidMount() {
        const user = this.props.user;
        
        // findCharacter(user.id)
        // .then(res => {
        //     let charArray = [];
        //     for (let i=0; i < res.data.length; i++) {
        //         charArray.push({
        //             _id: res.data[i]._id,
        //             name: res.data[i].name,
        //             attributes: res.data[i].attributes   
        //         })
        //     }
        //     this.setState({ characters: charArray, user: user });
        // })
        // .catch(err => console.log(err));
        this.updateCharacter(user);

        const socket = socketIOClient(this.state.endpoint);
        socket.on('characterUpdated', () => {
            console.log("character updated recognized");
            // let count = this.state.updateCount + 1;
            // console.log("Count = " + count);
            // this.forceUpdate();
            // this.setState({ updateCount: count });
            // console.log("Count = " + count);
            this.updateCharacter(user);
        });
    
    };

    updateCharacter(user){

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
       
        deleteCharacter(id)
        .then(res => {
            
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
    };

    render() {
        const userName = this.props.user.name;
        const user = this.props.user;
        return (
            <div>
            <div className="container-fluid" id="body">
                <div className="row">
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
                            <div className={this.state.characters.length % 4 === 0 ? "col-3" : "col-4"}>
                                <div className="card border border-dark">
                                    <PlayerCard key={character.name} character={character.name} attributes={character.attributes} ></PlayerCard>                
                                    <div className="butt">
                                        <button className="btn btn-block playerbttn border border-dark" id={character._id} onClick={() => this.delChar(character._id)}>Remove</button>
                                    </div>
                                </div>
                            </div>)
                        :
                            this.state.characters.map(character =>
                                
                                <div className="col-6">
                                    <div className="card border border-dark">
                                        <PlayerCard key={character.name} character={character.name} attributes={character.attributes}></PlayerCard>                
                                        <div className="butt">
                                            <button className="btn btn-block playerbttn border border-dark" id={character._id} onClick={() => this.delChar(character._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>)
                        }                   
                    
                    </div>
                    
                    <Music />
                    <Footer/>
                    </>
                    
                :
                    null
                    
                }
                { this.state.showCreate ? 
                    <CreatePlayer userName={userName} user={user} handleSubmit={this.handleSubmit.bind(this)}/>
                :
                null
                }
                </div>
                
            </div>
        
        )
    }
}

export default Playerview;









