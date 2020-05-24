import React, { Component } from 'react';
import "./style.css";

class SavedModal extends Component {

  render() {
    const name = this.props.name;

    return (

    <div id={"saved" + name.split(' ').join('')} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header"> 
                    <button type="button" className="close" data-dismiss="modal">&times;</button> 
                </div>
                <div className="modal-body">
                    {name} has been saved
                </div>
            </div>
        </div>
    </div>

    )}

}

export default SavedModal;