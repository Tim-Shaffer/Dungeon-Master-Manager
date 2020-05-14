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
