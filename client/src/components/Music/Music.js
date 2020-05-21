import React from "react";
import "./Music.css";

function Music() {
        return (
            <div id="spotify">
            <iframe title="music player" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0" 
            width="350" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        );
};

export default Music;