import React, { Component } from "react";
import "./Instructions.css";
import Info from "../Info/Info";

class Instructions extends Component {
    render() {
        return (
            <>
                <div id="instructions">
                    <hr></hr>
                        <h1> <strong>Voice Control Instructions</strong></h1>
                        <p>To use voice controls to modify player stats, please allow DMM access to your microphone,
                            to make adjustments to characters utilize the following syntax:
                            <br></br>
                            "START <em>First name of Player STAT Plus <strong>OR</strong> Minus NUMBER</em>"
                            <br></br>
                            <em>Example: </em> START JUSTIN EXPERIENCE PLUS 4
                        </p>
                    <hr></hr>
                </div>
            </>
        );
    }
}

export default Instructions;