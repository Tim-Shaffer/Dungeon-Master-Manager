import React, { Component } from "react";
import "./dmstyle.css";
import DMcard from "../DMcard/DMcard";
import { findCampaign } from "../../utils/campaign_controller";
import AddPlayer from "../AddPlayer/AddPlayer";
import DiceRoll from "../DiceRoll";

class DMview extends Component {

    state = {
        characters: [],
        user: "",
        showCreate: false,
    };

    componentDidMount () {
        // Just for testing 
        //-- I know I am executing this function!
        this.getUserCampaign();

    }
    createCampaign(e){
        e.preventDefault();
        this.setState({ showCreate: true})
    };

    getUserCampaign() {
        const user = this.props.user;

        findCampaign(user.id)
        .then(res => {
            let charArray = [];
            for (let i=0; i < res.data.characters.length; i++) {
                charArray.push({
                    _id: res.data.characters[i]._id,
                    name: res.data.characters[i].name,
                    attributes: res.data.characters[i].attributes   
                })
            }
            this.setState({ characters: charArray, user: user });
            // console.log(JSON.stringify(res));
        })
        .catch(err => console.log(err));
    }

    handleSubmit() {   

        this.setState({ showCreate: false})
        this.getUserCampaign();
    }

    render() {
        const userName = this.props.user.name;
        const user = this.props.user;

    return (
        
        <div>
            <div className="container-fluid" id="body">
                
                    {this.state.characters.length === 0 && !this.state.showCreate ?
                        <div className="row justify-content-center">
                            <div className="col-4" id="campaign">
                                <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark"  onClick={this.createCampaign.bind(this)}>Create Campaign</button>
                            </div>
                        </div>
                    :
                    !this.state.showCreate ? 
                    <div className="row">
                        <div className="col-6" id="campaign">
                            <div className="btn btn-danger btn-lg playerbttn border border-dark" data-toggle="modal" data-target="#rollDice" >Dice</div>

                            {/* <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Roll Dice</button> */}
                        </div>
                        
                        {/* <div className="col-6" id="campaign">
                            <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">End Campaign</button>
                        </div> */}
                    </div>
                    : 
                    null
                    }
                    
                <br/>

                {this.state.characters.length > 0 ?
                    <div className={this.state.characters.length === 1 ? "row justify-content-center" : "row"}>
                        {this.state.characters.length !== 2 ?
                            this.state.characters.map((character, index) => 
                            <div className={this.state.characters.length % 4 === 0 ? "col-3" : "col-4"} key={index}>
                                <div className="card border border-dark">
                                    <DMcard character={character.name} attributes={character.attributes} id={character._id}></DMcard>                
                                </div>
                            </div>)
                        :
                            this.state.characters.map((character, index) =>
                                 
                                <div className="col-6" key={index}>
                                    <div className="card border border-dark">
                                        <DMcard character={character.name} attributes={character.attributes} ></DMcard>                
                                    </div>
                                </div>)
                        }                   

                    </div>
                :
                    null
                }

                { this.state.showCreate ? 
                    <AddPlayer userName={userName} user={user} handleSubmit={this.handleSubmit.bind(this)}/>
                :
                null
                }

                {/* <AddPlayer></AddPlayer> */}

                <DiceRoll></DiceRoll>

            </div>
        </div>
        
        );
    }
}

export default DMview;