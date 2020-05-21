import React from "react";
import "./Music.css";

function Music() {
        return (
            <div id="spotify">
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0" 
            width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        );
};

export default Music;