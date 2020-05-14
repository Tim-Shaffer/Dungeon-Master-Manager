import React, { Component } from "react";
import { List, ListItem } from "../List";
import "./style.css";

class PlayerCard extends Component {

  render() {
    return (
      <>
      {/* {this.state.players.length > 0 ? */}
        <div className="card-header"><h5 className="card-title">{this.props.character}</h5></div>
        <div className="card-body">
          {this.props.attributes.length > 0 ?
            <List>
              {this.props.attributes.map(attribute =>
              <ListItem ><span className="attr-name">{attribute.attrName}:</span>  <span className="attr-value">{attribute.attrValue}</span> </ListItem>
              )}
              {/* // <ListItem ><span className="attr-name">Class:  </span><span className="attr-value">1</span></ListItem>
              // <ListItem ><span className="attr-name">Level:  </span><span className="attr-value">2</span></ListItem>
              // <ListItem ><span className="attr-name">Background:  </span><span className="attr-value">3</span></ListItem>
              // <ListItem ><span className="attr-name">Race:  </span><span className="attr-value">4</span></ListItem>
              // <ListItem ><span className="attr-name">Alignment:  </span><span className="attr-value">5</span></ListItem>
              // <ListItem ><span className="attr-name">Experience:  </span><span className="attr-value">6</span></ListItem>
              // <ListItem ><span className="attr-name">Strength:  </span><span className="attr-value">7</span></ListItem>
              // <ListItem ><span className="attr-name">Dexterity:  </span><span className="attr-value">8</span></ListItem>
              // <ListItem ><span className="attr-name">Constitution:  </span><span className="attr-value">9</span></ListItem>
              // <ListItem ><span className="attr-name">Intelligence:  </span><span className="attr-value">10</span></ListItem>
              // <ListItem ><span className="attr-name">Wisdom:  </span><span className="attr-value">11</span></ListItem>
              // <ListItem ><span className="attr-name">Charisma:  </span><span className="attr-value">12</span></ListItem> */}
            </List>
            :
            <div>No Attributes</div>
            }
        </div>
      </>
    );
  }

}

export default PlayerCard;
