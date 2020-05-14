import React, { Component } from "react";
import "./dmstyle.css";
import PlayerCard from "../PlayerCard/Playercard";


class DMview extends Component {

    state = {
        characters: [
            {name: "Test Character 1",
            attributes: [
                {attrName: "Class", attrValue: 1}, 
                {attrName: "Level", attrValue: 2}, 
                {attrName: "Background", attrValue: 3}, 
                {attrName: "Race", attrValue: 4} 
            ]
            },
            {name: "Test Character 2", attributes: [{attrName: "Class", attrValue: 1},]},
            // {name: "Test Character 3", attributes: [{attrName: "Class", attrValue: 1}, 
            // {attrName: "Level", attrValue: 2}, ]},
            {name: "Test Character 4", attributes: [{attrName: "Class", attrValue: 1}, 
            {attrName: "Level", attrValue: 2}, 
            {attrName: "Background", attrValue: 3}, ]},
        ]
    };

    render() {

    return (
        <body>

        <div>
            <div className="container-fluid" id="body">
                <div className="row">
                    <div className="col-4" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">New Campaign</button>
                    </div>
                    <div className="col-4" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Campaigns</button>
                    </div>
                    <div className="col-4" id="campaign">
                        <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">End Campaign</button>
                    </div>
                </div>
                <br/>

                {this.state.characters.length > 0 ?
                    <div className="row">
                        {this.state.characters.map(character => 
                        <div className={this.state.characters.length/4 === 1 ? "col-3" : "col-4"}>
                            <div className="card border border-dark">
                                <PlayerCard character={character.name} attributes={character.attributes}></PlayerCard>                
                                <div className="butt">
                                    <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a>
                                    <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                                </div>
                            </div>
                        </div>)} 
                    </div>
                :
                    <div className="row">Add some characters to the campaign</div>
                }

            </div>
        </div>
        </body>
        );
    }
}

export default DMview;