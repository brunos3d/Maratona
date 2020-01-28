import React, { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";

function App() {
    const [current, setCurrent] = useState(0);
    const [playlist, setPlaylist] = useState([]);

    function playURL(url) {
        setCurrent(0);
        setPlaylist([url, ...playlist]);
    }

    return (
        <div id="app">
            <Navbar playURL={playURL} />

            <div className="theater">
                <video id="video-component" src={playlist[current]} controls autoPlay />
            </div>

            <h1>{playlist[current]}</h1>
            {playlist && playlist.map((video_url, id) => id > 0 && <p key={id}>{video_url}</p>)}
        </div>
    );
}

export default App;
