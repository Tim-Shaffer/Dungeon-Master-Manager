import React, { Component } from "react";
import "./dmstyle.css";
import DMcard from "../DMcard/DMcard";

class DMview extends Component {

    state = {
        // characters: [
        //     {name: "Test Character 1",
        //     attributes: [
        //         {attrName: "Class", attrValue: 1}, 
        //         {attrName: "Level", attrValue: 2}, 
        //         {attrName: "Background", attrValue: 3}, 
        //         {attrName: "Race", attrValue: 4},
        //         {attrName: "Alignment", attrValue: 1}, 
        //         {attrName: "Experience", attrValue: 2}, 
        //         {attrName: "Strength", attrValue: 3}, 
        //         {attrName: "Dexterity", attrValue: 4}, 
        //         {attrName: "Constitution", attrValue: 1}, 
        //         {attrName: "Intelligence", attrValue: 2}, 
        //         {attrName: "Wisdom", attrValue: 3}, 
        //         {attrName: "Charisma", attrValue: 4}  
        //     ]
        //     },
        //     {name: "Test Character 2", 
        //     attributes: [{attrName: "Class", attrValue: 1},]},
            // {name: "Test Character 3", 
            // attributes: [{attrName: "Class", attrValue: 1}, 
            // {attrName: "Level", attrValue: 2}, ]},
        //     {name: "Test Character 4",
        //     attributes: [
        //         {attrName: "Class", attrValue: 1}, 
        //         {attrName: "Level", attrValue: 2}, 
        //         {attrName: "Background", attrValue: 3}, 
        //         {attrName: "Race", attrValue: 4},
        //         {attrName: "Alignment", attrValue: 1}, 
        //         {attrName: "Experience", attrValue: 2}, 
        //         {attrName: "Strength", attrValue: 3}, 
        //         {attrName: "Dexterity", attrValue: 4}, 
        //         {attrName: "Constitution", attrValue: 1}, 
        //         {attrName: "Intelligence", attrValue: 2}, 
        //         {attrName: "Wisdom", attrValue: 3}, 
        //         {attrName: "Charisma", attrValue: 4}  
        //     ]
        //     }
        // ]
        characters: []
    };

    render() {

    return (
        
        <div>
            <div className="container-fluid" id="body">
                
                    {this.state.characters.length === 0 ?
                        <div className="row justify-content-center">
                            <div className="col-4" id="campaign">
                                <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Campaign</button>
                            </div>
                        </div>
                    :
                    <div className="row">
                        <div className="col-6" id="campaign">
                            <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">New Campaign</button>
                        </div>
                        
                        <div className="col-6" id="campaign">
                            <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">End Campaign</button>
                        </div>
                    </div>
                    }
                    
                <br/>

                {this.state.characters.length > 0 ?
                    <div className={this.state.characters.length === 1 ? "row justify-content-center" : "row"}>
                        {this.state.characters.length !== 2 ?
                            this.state.characters.map(character => 
                            <div className={this.state.characters.length % 4 === 0 ? "col-3" : "col-4"}>
                                <div className="card border border-dark">
                                    <DMcard character={character.name} attributes={character.attributes}></DMcard>                
                                    <div className="butt">
                                        <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Save</a>
                                        <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                    </div>
                                </div>
                            </div>)
                        :
                            this.state.characters.map(character =>
                                 
                                <div className="col-6">
                                    <div className="card border border-dark">
                                        <DMcard character={character.name} attributes={character.attributes}></DMcard>                
                                        <div className="butt">
                                            <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a>
                                            <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                        </div>
                                    </div>
                                </div>)
                        }                   

                    </div>
                :
                    null
                }

            </div>
        </div>
        
        );
    }
}

export default DMview;