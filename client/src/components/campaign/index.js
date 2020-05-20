import React, { Component } from "react";

class Campchars extends Component {

    state = {
        isChecked: false,
        

    }

    onCheck = event => {
        let checked = !this.state.isChecked;
        this.setState({isChecked: checked});
        console.log(this.state);
        if (checked) {
            this.props.charChecked(this.props.Character.id)
        }
      }

    render() {

        return (

            <div className="row">
            <div className="col border border-dark rounded mb-0 bg-white text-dark">
            <div className="row">
                <div className="col-5">
                <span className="attr-name">{this.props.Character.name}:</span>
                </div>
                
                    <div className="col-2">
                    <div className="form-check">
                        <input  className="form-check-input" 
                                type="checkbox" value="" 
                                id={this.props.Character.id} 
                                checked={this.state.isChecked}
                                onChange={this.onCheck}/>
                        <label className="form-check-label" for={this.props.Character.id}>

                        </label>
                    </div>                  
                    </div>                          
            </div>          
            
            </div>

            </div>   
            
            
        );
    }
}
        
export default Campchars;
        
        
        
    