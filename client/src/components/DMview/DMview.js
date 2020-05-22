import React, { Component } from "react";
import "./dmstyle.css";
import DMcard from "../DMcard/DMcard";
import { findCampaign } from "../../utils/campaign_controller";
import AddPlayer from "../AddPlayer/AddPlayer";
import DiceRoll from "../DiceRoll";

// importing annyang
import annyang from "../Voice/Voice";

class DMview extends Component {
    state = {
        characters: [],
        user: "",
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
// syntax is 'start' + "first name of player" + "attribute" + "minus (or) plus" + "num"
// to save 'start' + "first name of player" + "save" 

    // compares input to DM commands
    this.setState({
        voiceInput: voiceInput
    });
    let voice = voiceInput[0].split(" ");
    
    //if "start" proceed with  
    if(voice[0].toLowerCase() === "start") {
        // removing "start" from array
        let a = voice.shift();
        // passing in array to playStat function
        this.playerStats(voice);
    }
    else {
        // if sentence isn't prepended with "start"
        console.log("You didn't say start");
        voice = [];
    }
  }

  playerStats = (x) => {
    // add player stats
    let name;
    let command;
    let stat;
    let num;
    for (let i = 0; i < x.length; i++) {
        if(i === 0) {
            name = x[i];
        }
        else if (i === 1) {
            if(x[i].toLowerCase() === "save") {
                // initialize "save" function to keep user changes
                console.log("leads to SAVE!!!");
            }
            stat = x[i].charAt(0).toUpperCase();
        }
        else if (i === 2) {
            if (x[0] === "+") {
                console.log("it grabbed");
                command = x[1];
            }
            command = x[i]
        }
        else if (i === 3) {
            num = x[i];
        }
        else {
            console.log("this did not work");
        }
    }
    let value = parseInt(command + num);

    // find campaign character by chosen name
    for (let i = 0; i < this.state.characters.length; i++) {
        if (name === this.state.characters[i].name) {
            console.log("MATCH!")

        }
    }

    console.log(value);
    console.log(stat);
    console.log(name);
  }
//  |-----------ANNYANG END------------|
    componentDidMount () {
        // Just for testing 
        //-- I know I am executing this function!
        this.getUserCampaign();
        
        annyang.addCommands(this.playerStats, this.saveStats);
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
                                <button type="button" className="btn btn-lg playerbttn border border-dark"  onClick={this.createCampaign.bind(this)}>Create Campaign</button>
                            </div>
                        </div>
                    :
                    !this.state.showCreate ? 
                    <div className="row">
                        <div className="col-6" id="campaign">
                            <div className="btn btn-lg playerbttn border border-dark" data-toggle="modal" data-target="#rollDice" >Dice</div>

                            {/* <button type="button" className="btn btn-lg playerbttn border border-dark">Roll Dice</button> */}
                        </div>
                        
                        {/* <div className="col-6" id="campaign">
                            <button type="button" className="btn btn-lg playerbttn border border-dark">End Campaign</button>
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

