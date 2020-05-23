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
              {this.props.attributes.map((attribute, index) =>
                <div className="row" key={index}>
                  <div className="col" key={index}>
                  <ListItem key={attribute.attrName}>
                    <div className="border border-dark rounded mb-0 bg-white text-dark">
                    <span className="attr-name">{attribute.attrName}:</span>  <span className="attr-value">{attribute.attrValue}</span>
                    </div>
                       </ListItem>
                  </div>
                </div>
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
