import React, { Component } from "react";
import { getCharacters } from "../../controllers/character_controller";
import { List, ListItem } from "../List";
import "./style.css";
import Campchars from "../campaign";
import { createCampaign } from "../../controllers/campaign_controller";

class AddPlayer extends Component {

  state = {
    isOpen: false,
    campaignName: "",
    Characters: [],
    campaignCharacters: []
  };

  componentDidMount = () => {
    getCharacters()
      .then(res => {
        const chararr= [];
        for (let i=0; i < res.data.length; i++) {
          chararr.push({name: res.data[i].name, id: res.data[i]._id})
        }
        this.setState({Characters: chararr})
      })
      .catch(err => {
        console.log(err);
      })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const user = this.props.user;
    const userId = user.id;
    const campaign = {
      name: this.state.campaignName,
      userId: userId,
      characters: this.state.campaignCharacters
    }
    createCampaign(userId,campaign)
    .then(res =>{
      // console.log(res);
      this.props.handleSubmit(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  };

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  charrChecked = id => {
    const campaignCharacters = this.state.campaignCharacters;
    campaignCharacters.push(id);
    this.setState({campaignCharacters: campaignCharacters});
    console.log(this.state);
  }


  render() {
    // const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="container-fluid" id="body">
        <br />
        <br />
        <br />
        <div className="row justify-content-center" id="card">
          <div className="col-4">
            <div className="card border border-dark">
              <div className="card-header" id="card-title">
                Create New Campaign
              </div>
              <div className="card-body create-campaign" id="campaignCardBody">
                <h5 className="card-title">
                  <label htmlFor="name" id="card-title">Campaign Name: </label>
                </h5>
                <div className="col">
                  <input
                    defaultValue={this.state.campaignName}
                    id="name"
                    name="campaignName"
                    onChange={this.handleInputChange.bind(this)}
                    type="text"
                    checked={false}
                  />
                </div>



                <form>
            <List>
              {this.state.Characters.map((Character, index) =>
                <div className="row" key={index}>
                  <div className="col">
                  <ListItem >
                    <Campchars Character={Character} charrChecked={this.charrChecked}></Campchars>
                  </ListItem>
                  </div>
                </div>
                
                )}
            </List>
            </form>
                </div>
              </div>
              <button className="btn btn-primary btn-block playerbttn border border-dark" id="DMbttn" onClick={this.handleFormSubmit} disabled={!this.state.campaignName}>
                Submit
              </button>
            </div>
          </div>
        </div>
    );
  }

}


export default AddPlayer;
