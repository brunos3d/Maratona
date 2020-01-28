import React, { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";

function App() {
    const [current, setCurrent] = useState();
    const [playlist, setPlaylist] = useState([]);

    function playURL(url) {
        setCurrent(0);
        setPlaylist([url]);
        console.log(url);
    }

    return (
        <div id="app">
            <Navbar playURL={playURL} />

            <div className="theater">
                {/* preload="metadata" */}
                <video id="video-component" src={playlist[current]} controls autoPlay />
            </div>
            <h1>{playlist[current]}</h1>
        </div>
    );
}

export default App;
