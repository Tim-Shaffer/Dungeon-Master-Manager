import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
    render() {
        return (
            <>
                <div className="jumbotron  text-center">   
                    <hr></hr>
                    <p>Dungeon Master Manager(DMM) is a Dungeon and Dragons campaign manager.    
                        With DMM you can perform one of two roles, the position of 
                        <em><strong> DM</strong></em> or <em><strong>PLAYER</strong></em>.
                        <br></br>
                        <br></br>
                        As a <em><strong>PLAYER</strong></em> you can create a character 
                        and their initial stats, which are adjusted in <em>real time</em> by the 
                        <em><strong> DM</strong></em> as the game progresses. Your characters are 
                        also saved into your account for ongoing sessions (No more worries of lost paper!!). 
                        <br></br>
                        <br></br>
                        As <em><strong>DM</strong></em> you can create a campaign, which includes the ability 
                        to view all of the <em><strong> PLAYERS</strong></em> and adjust their attributes accordingly,
                         these changes are automatically reflected in the <em><strong>PLAYER</strong></em> view.
                         You have no reason to not use this, unless you really enjoy handwriting and erasing stats, consistently!
                         ENJOY <em><strong>DUNGEON MASTER MANAGER</strong></em>. 
                         <br></br>
                         <br></br>
                         <p id="lastline">Click <em><strong>Login</strong></em> to begin!</p>
                    </p>
                    <hr></hr>
                </div>
                <footer id="sticky-footer" className="py-4 border-top border-danger bg-dark text-white-50" id="footer">
                    <div className="container text-center">
                    <small>Copyright &copy; Justin Acosta, Helen Maschmeyer,
                    Tim Shaffer, Wayne Wu
                    </small>
                    </div>
                </footer>
            </>
        );
    }
}

export default Info;