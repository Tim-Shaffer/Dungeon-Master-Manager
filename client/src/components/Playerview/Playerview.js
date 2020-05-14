import React, { Component } from "react";
import "./playerstyle.css";
import PlayerCard from "../PlayerCard/Playercard";

class Playerview extends Component {

    state = {
        characters: [
            {name: "Test Character 2", attributes: [{attrName: "Class", attrValue: 1},]},
            {name: "Test Character 3", attributes: [{attrName: "Class", attrValue: 1},]},
            {name: "Test Character 1",
            attributes: [
                {attrName: "Class", attrValue: 1}, 
                {attrName: "Level", attrValue: 2}, 
                {attrName: "Background", attrValue: 3}, 
                {attrName: "Race", attrValue: 4} 
            ]
        }]
        // characters: []
    };

    render() {
        return (
        <>
        <div>
            <div className="container-fluid" id="body">
                <div className="row">
                    {/* <div className="col-6" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                    </div>
                    <div className="col-6" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Characters</button>
                    </div> */}
                </div>
                <br/>
                <br/>
                <br/>
                {this.state.characters.length > 0 ?
                    this.state.characters.length === 1 ?
                    <div className="row justify-content-center" id="card">
                        <div className="col-4">
                            {this.state.characters.length > 0 ?
                            <div className="card border border-dark">
                                
                                {this.state.characters.map(character => <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>) }
                                                
                                <div className="butt">
                                    <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a> 
                                    <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                </div>
                            </div>
                            :
                            <div className="col-12" id="campaign">
                                <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                            </div>
                            } 
                        </div>
                    </div>
                    :
                    <div className="row" id="card">
                        {this.state.characters.map(character => 
                        <div className={this.state.characters.length/4 === 1 ? "col-4" : "col-3"}>
                            <div className="card border border-dark">
                                <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                <div className="butt">
                                    {/* <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a> */}
                                    <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                </div>
                            </div>
                        </div>)} 
                    </div>
                    
                :
                <div className="col-12" id="campaign">
                    <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                </div>
                }
                {/* <div className="row justify-content-center" id="card">
                    <div className="col-4">
                        {this.state.characters.length > 0 ?
                        <div className="card border border-dark">
                            
                            {this.state.characters.map(character => <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>) }
                                             
                            <div className="butt">
                                <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a> 
                                <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                            </div>
                        </div>
                        :
                        <div className="col-12" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                    </div>
                        } 
                    </div>
                </div> */}
            </div>
        </div>   
        </>
        );
    }

}

export default Playerview;