import React from "react";
import "./style.css";

function Jumbo() {
  return (
    <div>
        <div className="row">  
        <div className="col">
            <div className="jumbotron min-vh-100 text-center m-0 bg-info d-flex flex-column justify-content-center" id="jumbo" style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(https://i0.wp.com/nerdsonearth.com/wp-content/uploads/2019/12/dndmobile-br-1559158957902.jpg?fit=1280%2C720&ssl=1)">
                <div className="container">
                    <h1 className="jumboHeader">Dungeon Master Manager</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo ligula, pulvinar vel tellus non, laoreet laoreet lacus. Vivamus sollicitudin, lectus sit amet pellentesque elementum, augue ante mollis odio, eget accumsan dui turpis tempor ipsum. Proin laoreet dolor ipsum, at fermentum purus tempor et.</p>
                </div>
            </div>
        </div>
        </div>
    </div>

  );
}

export default Jumbo;