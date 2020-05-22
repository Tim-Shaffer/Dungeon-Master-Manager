import React, { Component } from "react";
import "./dmstyle.css";
import DMcard from "../DMcard/DMcard";
import { findCampaign } from "../../utils/campaign_controller";
import CreateCampaign from "../CreateCampaign/CreateCampaign";
import DiceRoll from "../DiceRoll";
import { deleteCampaign } from "../../utils/campaign_controller";

// importing annyang
import annyang from "../Voice/Voice";

class DMview extends Component {
    state = {
        characters: [],
        user: "",
        campaign: "",
        id: "",
        showCreate: false,
    };

//  |----------ANNYANG START----------|
  componentWillMount() {
    annyang.abort();
  }

  engineCallback = (status) => {
    // engine status
  }

  resultCallback = (voiceInput) => {
    // compares input to DM commands
    this.setState({
        voiceInput: voiceInput
    })
    console.log(voiceInput);
    // voiceInput.some(phrase => {
    //     return this.state
    // })
  }

  addStats = () => {
    // add player stats
  }

  removeStats = () => {
    // remove player stats
  }
//  |-----------ANNYANG END------------|

    componentDidMount () {
        // Just for testing 
        //-- I know I am executing this function!
        this.getUserCampaign();
        
        annyang.addCommands(this.addStats, this.removeStats);
        annyang.addCallback(this.engineCallback, this.resultCallback);
        annyang.start();
        this.setState({
        voiceStatus: annyang.isSupported() ? 'Supported' : 'Unsupported'
        });
    }

    createCampaign(e){
        e.preventDefault();
        this.setState({ showCreate: true})
    };

    getUserCampaign() {
        const user = this.props.user;
        findCampaign(user.id)
        .then(res => {
            let campaign = res.data.name;
            let id = res.data._id;
            let charArray = [];
            for (let i=0; i < res.data.characters.length; i++) {
                charArray.push({
                    _id: res.data.characters[i]._id,
                    name: res.data.characters[i].name,
                    attributes: res.data.characters[i].attributes   
                })
            }
            this.setState({ characters: charArray, user: user, campaign: campaign, id: id});
            // console.log(JSON.stringify(res));
        })
        .catch(err => console.log(err));
    }

    handleSubmit() {   
        this.setState({ showCreate: false})
        this.getUserCampaign();
    }

    endCampaign(id){
        console.log(this.state);
        console.log(id);
        deleteCampaign(id)
        .then(res => {
            console.log(res);
            let charArray = [];
            
            this.setState({ characters: charArray, campaign: "", id: "", showCreate: false });
        })
        .catch(err => {
            console.log(err);
        })
    };

    render() {
        const userName = this.props.user.name;
        const user = this.props.user;
    return (
        
        <div>
            <div className="container-fluid" id="body">
                
                    {this.state.characters.length === 0 && !this.state.showCreate ?
                        <div className="row justify-content-center">
                            <div className="col-4" id="campaign">
                                <button type="button" className="btn btn-lg playerbttn border border-dark"  onClick={this.createCampaign.bind(this)}>Create Campaign</button>
                            </div>
                        </div>
                    :
                    !this.state.showCreate ? 
                    <div className="row">
                        <div className="col-4" id="campaign">
                            <div className="btn btn-lg playerbttn border border-dark" data-toggle="modal" data-target="#rollDice" >Dice</div>
                        </div>

                        <div className="col-4" id="campaign">
                            <div className="btn btn-lg campbttn border border-dark">{this.state.campaign}</div>
                        </div>
                        
                        <div className="col-4" id="campaign">
                            <button type="button" className="btn btn-lg playerbttn border border-dark" id={this.state.id} onClick={() => this.endCampaign(this.state.id)}>End Campaign</button>
                        </div>
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
                    <CreateCampaign userName={userName} user={user} handleSubmit={this.handleSubmit.bind(this)}/>
                :
                null
                }
                <DiceRoll></DiceRoll>
            </div>
        </div>
        
        );
    }
}
export default DMview;

