import React, { Component } from "react";
import "./playerstyle.css";
import PlayerCard from "../PlayerCard/Playercard";

class Playerview extends Component {

    state = {
        characters: [
            {name: "Test Character 1",
            attributes: [
                {attrName: "Class", attrValue: 1}, 
                {attrName: "Level", attrValue: 2}, 
                {attrName: "Background", attrValue: 3}, 
                {attrName: "Race", attrValue: 4} 
            ]
        }]
    };

    render() {
        return (
        <>
        <div>
            <div className="container-fluid" id="body">
                <div className="row">
                    <div className="col-6" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                    </div>
                    <div className="col-6" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Characters</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
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
                        <div>Add a new character</div>
                        } 
                    </div>
                </div>
            </div>
        </div>   
        </>
        );
    }

}

export default Playerview;