import React, { Component } from "react";
import "./dmstyle.css";
import DMcard from "../DMcard/DMcard";
import { findCampaign } from "../../utils/campaign_controller";
import CreateCampaign from "../CreateCampaign/CreateCampaign";
import DiceRoll from "../DiceRoll";
import { deleteCampaign } from "../../utils/campaign_controller";
import Footer from "../Footer/Footer";
import Instructions from "../Instructions/Instructions";

// importing annyang
import annyang from "../Voice/Voice";
import { updateCharacter } from "../../utils/character_controller";

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
        console.log("You didn't say 'START' to initialize commands");
        voice = [];
    }
  }

//   "start justin"
  playerStats = (x) => {
    const characters = this.state.characters;
    console.log(characters);
    // add player stats
    let name;
    let command;
    let stat;
    let num;
    for (let i = 0; i < x.length; i++) {
        if(i === 0) {
            let a = x[i].charAt(0).toUpperCase(), b = x[i].slice(1);
            name = a + b;
        }
        else if (i === 1) {
            if(x[i].toLowerCase() === "save") {
                // initialize "save" function to keep user changes
                console.log("leads to SAVE!!!");
                // experiment 

            }
            let a = x[i].charAt(0).toUpperCase(), b = x[i].slice(1);
            stat = a + b;
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
    let matched = false;
    let attrMatch = false;

    if (name && value && stat) {
        for (let i = 0; i < characters.length && !matched; i++) {
            if (name === characters[i].name) {
                console.log("MATCH!");
                matched = true;
                for (var e = 0; e < characters[i].attributes.length && !attrMatch; e++) {
                    if (stat === characters[i].attributes[e].attrName) {
                        attrMatch = true;
                        let attrValue = parseInt(characters[i].attributes[e].attrValue);
                        attrValue += value;
                        characters[i].attributes[e].attrValue = attrValue.toString();
                    }
                }
            }
        }
    }

    if (matched && attrMatch) {
        console.log("Matched found!!!");
        console.log(characters);
        this.setState({
            characters: characters
        });
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
                                    <DMcard character={character.name} attributes={character.attributes} id={character._id} key={character.name}></DMcard>                
                                </div>
                            </div>)
                        :
                            this.state.characters.map((character, index) =>
                                 
                                <div className="col-6" key={index}>
                                    <div className="card border border-dark">
                                        <DMcard character={character.name} attributes={character.attributes} key={character.name} ></DMcard>                
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
                <Instructions />
                <Footer/>
            </div>
        </div>
        
        );
    }
}
export default DMview;

