import React from "react";
import "./playerstyle.css";

function Playerview() {

  return (
    <body>

    <div>
        <div className="container-fluid" id="body">
            <div className="row">
                <div className="col-6" id="campaign">
                    <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Create Character</button>
                </div>
                <div className="col-6" id="campaign">
                    <button type="button" className="btn btn-danger btn-lg playerbttn border border-dark">Characters</button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row justify-content-center" id="card">
                <div className="col-4">
                    <div className="card border border-dark">
                        <div className="card-header">
                        Player 1
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Name of player</h5>
                        <p className="card-text">class & Level:</p>
                        <p className="card-text">Background:</p>
                        <p className="card-text">Race:</p>
                        <p className="card-text">Alignment:</p>
                        <p className="card-text">Experience:</p>
                        <p className="card-text">Strength:</p>
                        <p className="card-text">Dexterity:</p>
                        <p className="card-text">Constitution:</p>
                        <p className="card-text">Intelligence:</p>
                        <p className="card-text">Wisdom:</p>
                        <p className="card-text">Charisma:</p>
                        </div>                    
                        <div className="butt">
                            <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Edit</a>
                            <a href="#" className="btn btn-primary btn-block playerbttn border border-dark" id="playerbttn">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
  );
}

export default Playerview;